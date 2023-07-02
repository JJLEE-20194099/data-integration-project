import os
import json
from fastapi import HTTPException
from tqdm import tqdm
import numpy as np
import lightgbm as lgb
from fastapi.templating import Jinja2Templates

from app.config import Config
from app import create_app

from app.utils.helper.read import read_necessary_vars, read_pretrained_models, get_best_place, read_pretrained_alley_models, read_main_columns

from app.modules.nlp.service import preprocess_text
from app.modules.preprocessing.service import preprocessing_data_v2, preprocessing_data_alley_type
from app.modules.preprocessing.get import get_necessary_values
from app.modules.facility.service import count_facilities_v2
from app.modules.price.prediction_map import get_prediction_map_by_district

from app.models.location_model import LocationModel, DistrictModel
from app.models.street_model import StreetInfoModelList
from app.models.realestate_model import RealEstateModelList, RealEstateWithFacilityModelList
from app.utils.constant import Message, FilePath

from app.modules.io.service import IOReader

from app.utils.enum import RealEstateLevel

API_KEY_GOOGLE = Config.API_KEY_GOOGLE
# Create Application Instance
app = create_app(Config.ENV_MODE or 'dev')

templates = Jinja2Templates(directory="app/FE/templates")

# Read models
try:
    models = read_pretrained_models()
    alley_models = read_pretrained_alley_models()
except Exception as e:
    print(e)
    print("Load pretrained models failed")

# Read some neccessary vars
try:
    administrative_genre_label_encoder, vectorizer, alley_desc, district_label_encoder, district_sys, ward_label_encoder, road_label_encoder, the_direction_of_the_house, house_direction_desc = read_necessary_vars()
except Exception as e:
    print(e)
    print("Read Necessary variables failed")

# Read some columns
trained_cols_v3, trained_cols_v2, trained_cols, distance_cols = read_main_columns()

feature_cols_list = [trained_cols_v3,
                     trained_cols_v2, trained_cols, distance_cols]

park_df, road_df, commercial_df, population_df = get_best_place()


@app.get("/healthcheck")
def healthcheck():
    """Function checking price prediction module"""
    return {
        "data": "200"
    }


@app.post("//predict-house-v1")
async def predict_price(body: LocationModel):
    """Function predicing price - version 1"""
    lat, lon, district, administrative_genre, detailed_address = body.lat, body.lon, body.district, body.administrative_genre, body.detailed_address
    district = preprocess_text(district)
    detailed_address = preprocess_text(detailed_address)
    administrative_genre = preprocess_text(administrative_genre)

    models = [lgb.Booster(
        model_file=f'{FilePath.PRICE_MODEL_V1}{i}.txt') for i in range(5)]

    features_with_text, test_df = await preprocessing_data_alley_type(lat, lon, district, administrative_genre, detailed_address, facility_count_list=[], place_vars=[park_df, road_df, commercial_df, population_df], necessary_vars=[district_label_encoder, administrative_genre_label_encoder, vectorizer, alley_desc, district_label_encoder, district_sys, ward_label_encoder, road_label_encoder, the_direction_of_the_house, house_direction_desc], feature_cols_list=feature_cols_list)

    preds = [model.predict(features_with_text) for model in models]
    pred = sum(preds)
    pred = pred / 5
    pred = [np.exp(p) for p in pred]

    test_df['low_pred'] = [p - p/13 for p in pred]
    test_df['high_pred'] = [p + p/13 for p in pred]
    test_df['mean_pred'] = pred

    type_1 = test_df[test_df.type_of_house == 3]
    type_2 = test_df[test_df.type_of_house == 2]

    return {
        "data": {
            "alleyHousePrice": {
                "min": type_1['low_pred'].min(),
                "max": type_1['high_pred'].max(),
                "mean": type_1['mean_pred'].mean(),
                "std": type_1['mean_pred'].std()
            },
            "streetHousePrice": {
                "min": type_2['low_pred'].min(),
                "max": type_2['high_pred'].max(),
                "mean": type_2['mean_pred'].mean(),
                "std": type_2['mean_pred'].std()
            }
        }
    }

# @app.post("/predict-house-v2")
async def predict_price_v2(body: RealEstateModelList):
    """Function predicing price - version 2"""
    body = body.dict()
    data = body['data']

    num_of_instance = len(data)

    alley_list, bio_list, detailed_address_list, administrative_genre_list, ward_list, road_list, district_list, lat_list, lon_list, road_width_in_front_of_house_list, facade_list, the_direction_of_the_house_list, acreage_list, is_car_road_list, number_of_bedrooms_list, number_of_floors_list, number_of_toilets_list = get_necessary_values(
        data)
    features_with_text, _ = await preprocessing_data_v2(alley_list, bio_list, detailed_address_list, administrative_genre_list, ward_list, road_list, district_list, lat_list, lon_list, road_width_in_front_of_house_list, facade_list, the_direction_of_the_house_list, acreage_list, is_car_road_list, number_of_bedrooms_list, number_of_floors_list, number_of_toilets_list)
    del _
    preds = [model.predict(features_with_text) for model in models]

    predicted_price_list = []

    for i in range(num_of_instance):
        pred = 0
        for j in range(5):
            p = preds[j][i]
            pred += p
        pred = pred / 5
        pred = np.exp(pred)
        pred = [pred - pred/10, pred + pred / 10]

        predicted_price_list.append(pred)

    return {
        "data": predicted_price_list
    }


@app.post("//predict-house-v3")
async def predict_price_v3(body: RealEstateWithFacilityModelList):
    """Function predicing price - version 3"""
    body = body.dict()
    try:
        data = body['data']
    except:
        raise HTTPException(status_code=500, detail={
            "type_of_error": Message.KEY_REQUIRED,
            "required_key": 'data'
        })

    try:
        facilityList = body['facilityList']
    except:
        raise HTTPException(status_code=500, detail={
            "type_of_error": Message.KEY_REQUIRED,
            "required_key": 'facilityList'
        })

    try:
        facilityCountList = [count_facilities_v2(
            eachFacilityList) for eachFacilityList in facilityList]
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500, detail='Error in preprocessing facility data')

    num_of_instance = len(data)

    try:
        alley_list, bio_list, detailed_address_list, administrative_genre_list, ward_list, road_list, district_list, lat_list, lon_list, road_width_in_front_of_house_list, facade_list, the_direction_of_the_house_list, acreage_list, is_car_road_list, number_of_bedrooms_list, number_of_floors_list, number_of_toilets_list = get_necessary_values(
            data)
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500, detail='Error in getting necessary data')
    try:
        features_with_text, _ = await preprocessing_data_v2(alley_list, bio_list, detailed_address_list, administrative_genre_list, ward_list, road_list, district_list, lat_list, lon_list, road_width_in_front_of_house_list, facade_list, the_direction_of_the_house_list, acreage_list, is_car_road_list, number_of_bedrooms_list, number_of_floors_list, number_of_toilets_list, facility_count_list=facilityCountList, place_vars=[park_df, road_df, commercial_df, population_df], necessary_vars=[district_label_encoder, administrative_genre_label_encoder, vectorizer, alley_desc, district_label_encoder, district_sys, ward_label_encoder, road_label_encoder, the_direction_of_the_house, house_direction_desc], feature_cols_list=feature_cols_list)
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500, detail='Error in preprocessing data version 2 - preprocessing_data_v2')

    del _

    try:
        preds = [model.predict(features_with_text) for model in models]
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500, detail='Error occurs when inference in predicting price for assets')

    predicted_price_list = []

    try:
        for i in range(num_of_instance):
            pred = 0
            for j in range(5):
                p = preds[j][i]
                pred += p
            pred = pred / 5
            pred = np.exp(pred)
            pred = [pred - pred/10, pred + pred / 10]

            predicted_price_list.append(pred)

    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500, detail='Error occurs when post-preprocessing result')

    return {
        "data": predicted_price_list
    }

# @app.get("/get-realestate-price-map")
async def get_realestate_price_map():
    """Function getting realestate price map"""
    district_map_dict = json.load(
        open(FilePath.CENTER_GEOLOCATION, encoding='utf-8'))

    district_list = list(district_map_dict.keys())
    district_type_list = []
    district_name_list = []

    for district in district_list:
        district_word_list = district.split(" ")
        district_type_list.append(preprocess_text(district_word_list[0]))
        district_name_list.append(preprocess_text(
            " ".join(district_word_list[1:])))

    response = dict()
    for i, district in tqdm(enumerate(district_list)):
        administrative_genre = district_type_list[i]
        units = list(district_map_dict[district].keys())
        unit_dict = dict()
        for unit in tqdm(units):
            try:
                body = LocationModel.parse_obj({
                    "lat": district_map_dict[district][unit]['lat'],
                    "lon": district_map_dict[district][unit]['lon'],
                    "district": district_name_list[i],
                    "administrative_genre": administrative_genre,
                    "detailed_address": ', '.join([unit, district, "Hà Nội"])

                })
                res = await predict_price(body)
                unit_dict[unit] = res
            except:
                pass
        response[district] = unit_dict

    with open(FilePath.REAL_ESTATE_PRICE, 'w',  encoding='utf-8') as outfile:
        json.dump(response, outfile, ensure_ascii=False)

    return response


async def predict_price_with_alley_type(body: LocationModel):
    """Function predicting price with alley type"""
    lat, lon, district, administrative_genre, detailed_address = body.lat, body.lon, body.district, body.administrative_genre, body.detailed_address
    district = preprocess_text(district)
    detailed_address = preprocess_text(detailed_address)
    administrative_genre = preprocess_text(administrative_genre)

    features_with_text, test_df = await preprocessing_data_alley_type(lat, lon, district, administrative_genre, detailed_address, facility_count_list=[], place_vars=[park_df, road_df, commercial_df, population_df], necessary_vars=[district_label_encoder, administrative_genre_label_encoder, vectorizer, alley_desc, district_label_encoder, district_sys, ward_label_encoder, road_label_encoder, the_direction_of_the_house, house_direction_desc], feature_cols_list=feature_cols_list)

    preds = [model.predict(features_with_text) for model in alley_models]

    pred = sum(preds)
    pred = pred / 5
    pred = [np.exp(p) for p in pred]

    test_df['low_pred'] = [p - p/13 for p in pred]
    test_df['high_pred'] = [p + p/13 for p in pred]
    test_df['mean_pred'] = pred

    type_1 = test_df[test_df.type_of_house == 3]
    type_2 = test_df[test_df.type_of_house == 2]

    type_1_3 = type_1[type_1.road_width_in_front_of_house < 3]
    type_1_2 = type_1[(type_1.road_width_in_front_of_house >= 3)
                      & (type_1.road_width_in_front_of_house < 5)]
    type_1_1 = type_1[(type_1.road_width_in_front_of_house >= 5)]

    w_1 = 0.6
    w_2 = 0.4
    return {
        "alleyHousePrice": {
            "1": {
                "metadata": "Ngõ rộng từ 5m trở lên",
                "min": (type_1_1['low_pred'].min() * w_1 + type_1_2['low_pred'].min() * 1.25 * w_2),
                "max": (type_1_1['low_pred'].max() * w_1 + type_1_2['low_pred'].max() * 1.25 * w_2),
                "mean": (type_1_1['low_pred'].mean() * w_1 + type_1_2['low_pred'].mean() * 1.25 * w_2),
                "std": (type_1_1['low_pred'].std() * w_1 + type_1_2['low_pred'].std() * 1.25 * w_2),
            },
            "2": {
                "metadata": "Ngõ rộng từ 3 đến dưới 5m",
                "min": (type_1_2['low_pred'].min() * w_1 + type_1_1['low_pred'].min() * 0.7 * w_2),
                "max": (type_1_2['low_pred'].max() * w_1 + type_1_1['low_pred'].max() * 0.7 * w_2),
                "mean": (type_1_2['low_pred'].mean() * w_1 + type_1_1['low_pred'].mean() * 0.7 * w_2),
                "std": (type_1_2['low_pred'].std() * w_1 + type_1_1['low_pred'].std() * 0.7 * w_2),
            },
            "3": {
                "metadata": "Ngõ rộng dưới 3m",
                "min": (type_1_3['low_pred'].min() * (w_1 - 0.3) + type_1_2['low_pred'].min() * 0.8 * (w_2 + 0.3)),
                "max": (type_1_3['low_pred'].max() * (w_1 - 0.3) + type_1_2['low_pred'].max() * 0.8 * (w_2 + 0.3)),
                "mean": (type_1_3['low_pred'].mean() * (w_1 - 0.3) + type_1_2['low_pred'].mean() * 0.8 * (w_2 + 0.3)),
                "std": (type_1_3['low_pred'].std() * (w_1 - 0.3) + type_1_2['low_pred'].std() * 0.8 * (w_2 + 0.3)),
            }

        },
        "streetHousePrice": {
            "min": type_2['low_pred'].min(),
            "max": type_2['high_pred'].max(),
            "mean": type_2['mean_pred'].mean(),
            "std": type_2['mean_pred'].std()
        }
    }


@app.post("//predict-house-with-type-of-alley")
async def predict_price_with_type_of_alley(body: StreetInfoModelList):
    """Function wrapping predict-house-with-type-of-alley service"""
    body = body.dict()
    data = body['data']
    res = []

    district_list = []
    district_type_list = []

    for instance in data:
        district_list.append(instance['district'])
        district_type_list.append("quận")

    response = []

    for i, district in tqdm(enumerate(district_list)):
        administrative_genre = district_type_list[i]
        unit = data[i]['ward']
        street = data[i]['street']
        if street != street:
            street == ""

        detailed_address_list = []
        detailed_address_list.append("đường " + street)
        detailed_address_list.append("phường " + unit)
        detailed_address_list.append(f"quận {district}, hà nội")
        detailed_address = ", ".join(detailed_address_list)

        input = {
            "lat": data[i]['geolocation']['latitude'],
            "lon": data[i]['geolocation']['longitude'],
            "district": district,
            "street": street,
            "administrative_genre": administrative_genre,
            "detailed_address": detailed_address

        }

        body = LocationModel.parse_obj(input)
        res = await predict_price_with_alley_type(body)

        response.append({
            "input": input,
            "output": res
        })
    return response


# @app.post("/predict-house-with-type-of-alley-by-district")
async def predict_price_with_type_of_alley_by_district(body: DistrictModel):
    """Function wrapping predict-house-with-type-of-alley-by-district service"""
    district_files = os.listdir(FilePath.ALL_STREET_GEOLOCATION)
    district_name_list = [file.split('.')[0] for file in district_files]

    existed_district_files =  os.listdir(FilePath.STREET_PRICE)
    existed_district_name_list = [file.split('.')[0] for file in existed_district_files]

    json_object = dict()
    for district in tqdm(list(set(district_name_list) - set(existed_district_name_list))):

        try:
            print("========================")
            print("Process for District:", district)

            unit_list_of_district = get_prediction_map_by_district(district)[
                'data']

            json_object_by_district = []
            selected_unit_list_of_district = [{
                "city": unit["city"],
                "district": unit["district"],
                "ward": unit["ward"],
                "street": unit["street"],
                "geolocation": unit["geolocation"]
            } for unit in unit_list_of_district]

            body = StreetInfoModelList.parse_obj({
                'data': selected_unit_list_of_district
            })

            estimate_price_list = await predict_price_with_type_of_alley(body)

            for i, unit in enumerate(unit_list_of_district):
                unit['estimatePrice'] = estimate_price_list[i]
                del unit['geolocation']
                json_object_by_district.append(unit)

            with open(f"{FilePath.STREET_PRICE}/{district}.json", "w", encoding='utf-8') as outfile:
                json.dump(json_object_by_district, outfile, ensure_ascii=False)

            json_object[district] = json_object_by_district
        except:
            pass

    return json_object

@app.get("//get-price-map-by-type/{real_estate_level}")
def get_price_map_by_type(real_estate_level: str):
    """Function getting price map by district level, ward level or street level - type must be in [street, ward, district]"""
    accepted_values = [e.value for e in RealEstateLevel]
    if real_estate_level not in accepted_values:
        raise HTTPException(status_code=500, detail={
            "type_of_error": Message.INVALID_VALUE,
            "accepted_values": accepted_values
        })
    if real_estate_level == 'district':
        district_dict = dict()
        district_list = os.listdir(FilePath.STREET_PRICE)
        district_list = [district.split(".")[0] for district in district_list]
        for district in district_list:
            district_info = IOReader('json', f"{FilePath.STREET_PRICE}/{district}.json").read()
            district_price_info = [ward_info['estimatePrice']['output'] for ward_info in district_info]


            min_alley_price_list = [sum(district_price['alleyHousePrice'][key]['min'] for district_price in district_price_info) / len(district_price_info) for key in ["1", "2", "3"]]
            max_alley_price_list = [sum(district_price['alleyHousePrice'][key]['max'] for district_price in district_price_info) / len(district_price_info) for key in ["1", "2", "3"]]
            mean_alley_price_list = [sum(district_price['alleyHousePrice'][key]['mean'] for district_price in district_price_info) / len(district_price_info) for key in ["1", "2", "3"]]
            std_alley_price_list = [sum(district_price['alleyHousePrice'][key]['std'] for district_price in district_price_info) / len(district_price_info) for key in ["1", "2", "3"]]

            min_street_price = sum(district_price['streetHousePrice']['min'] for district_price in district_price_info) / len(district_price_info)
            max_street_price = sum(district_price['streetHousePrice']['max'] for district_price in district_price_info) / len(district_price_info)
            mean_street_price = sum(district_price['streetHousePrice']['mean'] for district_price in district_price_info) / len(district_price_info)
            std_street_price = sum(district_price['streetHousePrice']['std'] for district_price in district_price_info) / len(district_price_info)

            district_dict[district] = {
                "alleyHousePrice": {
                    "1": {
                        "metadata": "Ngõ rộng từ 5m trở lên",
                        "min": min_alley_price_list[0],
                        "max": max_alley_price_list[0],
                        "mean": mean_alley_price_list[0],
                        "std": std_alley_price_list[0]
                    },
                    "2": {
                        "metadata": "Ngõ rộng từ 3 đến dưới 5m",
                        "min": min_alley_price_list[1],
                        "max": max_alley_price_list[1],
                        "mean": mean_alley_price_list[1],
                        "std": std_alley_price_list[1]
                    },
                    "3": {
                        "metadata": "Ngõ rộng dưới 3m",
                        "min": min_alley_price_list[2],
                        "max": max_alley_price_list[2],
                        "mean": mean_alley_price_list[2],
                        "std": std_alley_price_list[2]
                    }
                },
                "streetHousePrice": {
                    "min": min_street_price,
                    "max": max_street_price,
                    "mean": mean_street_price,
                    "std": std_street_price
                }
            }

        with open(f"{FilePath.GROUP_PRICE}/groupby_district.json", "w", encoding='utf-8') as outfile:
            json.dump(district_dict, outfile, ensure_ascii=False)

        return district_dict
    elif real_estate_level == 'ward':
        district_dict = dict()
        district_list = os.listdir(FilePath.STREET_PRICE)
        district_list = [district.split(".")[0] for district in district_list]
        for district in district_list:
            district_info = IOReader('json', f"{FilePath.STREET_PRICE}/{district}.json").read()
            ward_dict = dict()
            for street_info in district_info:
                ward = street_info['ward']
                if ward not in list(ward_dict.keys()):

                    ward_dict[ward] = dict()

                    ward_dict[ward]['alleyHousePrice'] = {
                        "1": {
                            "metadata": "Ngõ rộng từ 5m trở lên",
                            "min": 0,
                            "max": 0,
                            "mean": 0,
                            "std": 0
                        },
                        "2": {
                            "metadata": "Ngõ rộng từ 3 đến dưới 5m",
                            "min": 0,
                            "max": 0,
                            "mean": 0,
                            "std": 0
                        },
                        "3": {
                            "metadata": "Ngõ rộng dưới 3m",
                            "min": 0,
                            "max": 0,
                            "mean": 0,
                            "std": 0
                        }
                    }
                    ward_dict[ward]['streetHousePrice'] = {
                            "min": 0,
                            "max": 0,
                            "mean": 0,
                            "std": 0
                        }
                    ward_dict[ward]['numOfStreet'] = 0
                ward_dict[ward]['numOfStreet'] += 1


                for type_of_info in ["min", "max", "mean", "std"]:
                    for key in ["1", "2", "3"]:
                        ward_dict[ward]['alleyHousePrice'][key][type_of_info] = ward_dict[ward]['alleyHousePrice'][key][type_of_info] + street_info['estimatePrice']['output']['alleyHousePrice'][key][type_of_info]
                    ward_dict[ward]['streetHousePrice'][type_of_info] += street_info['estimatePrice']['output']['streetHousePrice'][type_of_info]


            for ward in ward_dict.keys():
                for type_of_info in ["min", "max", "mean", "std"]:
                    for key in ["1", "2", "3"]:
                        ward_dict[ward]['alleyHousePrice'][key][type_of_info] = ward_dict[ward]['alleyHousePrice'][key][type_of_info] / ward_dict[ward]['numOfStreet']

                    ward_dict[ward]['streetHousePrice'][type_of_info] = ward_dict[ward]['streetHousePrice'][type_of_info] / ward_dict[ward]['numOfStreet']



            district_dict[district] = ward_dict

            with open(f"{FilePath.GROUP_PRICE}/groupby_district_ward.json", "w", encoding='utf-8') as outfile:
                json.dump(district_dict, outfile, ensure_ascii=False)

        return  district_dict
    elif real_estate_level == 'street':
        street_price_map = IOReader('json', f"{FilePath.GROUP_PRICE}/all.json").read()

        response = dict()

        for district in street_price_map.keys():
            district_price_map = street_price_map[district]
            modified_district_price_map = []
            for street_info in district_price_map:
                estimate_price = street_info['estimatePrice']['output']
                modified_district_price_map.append({
                    "district": street_info["district"],
                    "ward": street_info["ward"],
                    "street": street_info["street"],
                    "city": street_info["city"],
                    "estimatePrice": estimate_price
                })

            response[district] = modified_district_price_map

        with open(f"{FilePath.GROUP_PRICE}/groupby_district_ward_street.json", "w", encoding='utf-8') as outfile:
                json.dump(response, outfile, ensure_ascii=False)

        return response

@app.get('//price-prediction')
def demo():
    i = 0
    return templates.TemplateResponse('index.html', {"feature_form_structure": feature_form_structure, "i": i})




















