import numpy as np
from fastapi import HTTPException
import pandas as pd
import scipy
from app.utils.helper.distance import distance_func, far_or_not_by_list, preprocess_distance
from app.modules.facility.dto.location import DetailedLocationConfig, PlaceInformationConfig, LocationListConfig
from app.modules.facility.service import wrap_facility_info, cal_distance_to_type_of_place, get_num_facilities_based_location_list_util
from app.modules.nlp.service import gen_text, preprocess_text, FeatureExtraction
from app.modules.preprocessing.get import get_candidate_dict_by_version

async def preprocessing_data(lat, lon, district, administrative_genre, detailed_address, facility_count_list=[], place_vars=[], necessary_vars=[], feature_cols_list=[]):

    try:
        park_df, road_df, commercial_df, population_df = place_vars[
            0], place_vars[1], place_vars[2], place_vars[3]
        district_label_encoder, administrative_genre_label_encoder, vectorizer, alley_desc, district_label_encoder, district_sys, ward_label_encoder, road_label_encoder, the_direction_of_the_house, house_direction_desc = necessary_vars[
            0], necessary_vars[1], necessary_vars[2], necessary_vars[3], necessary_vars[4], necessary_vars[5], necessary_vars[6], necessary_vars[7], necessary_vars[8], necessary_vars[9]
        trained_cols_v3, trained_cols_v2, trained_cols, distance_cols = feature_cols_list[
            0], feature_cols_list[1], feature_cols_list[2], feature_cols_list[3]
    except:
        print("Error when read loaded data into preprocessing data v2")

    elevation = np.nan
    # try:
    #     elevation_url = f"https://maps.googleapis.com/maps/api/elevation/json?locations={lat}%2C-{lon}&key={API_KEY_GOOGLE}"
    #     response = requests.get(elevation_url)
    #     data = response.json()
    #     elevation = data['results'][0]['elevation']

    # except:
    #     print("Error when call elevation api")

    test_df = pd.DataFrame()

    facility_df = await wrap_facility_info(DetailedLocationConfig(
        lat=lat,
        lon=lon,
        district=district,
        administrative_genre=administrative_genre
    ), facility_count_list)

    test_df = facility_df.copy()
    test_df['elevation'] = elevation

    test_df = cal_distance_to_type_of_place(test_df, PlaceInformationConfig(
        park_df = park_df,
        road_df = road_df,
        commercial_df = commercial_df
    ))

    population_df = population_df.rename(columns={'name': 'district', 'acreage': 'acreage_sum',
                                         'lat': 'lat_center', 'lon': 'lon_center', 'average_price': 'overall_average_price'})
    test_df = test_df.merge(population_df, how='left', on=['district'])

    test_df['district'] = district_label_encoder.transform(
        test_df['district'].tolist())

    test_df['administrative_genre'] = facility_df['administrative_genre'].tolist()
    test_df['administrative_genre'] = administrative_genre_label_encoder.transform(
        test_df['administrative_genre'].tolist())

    feature_df = pd.DataFrame()

    candidate_dict = get_candidate_dict_by_version(ver = 1)

    type_list = list(candidate_dict.keys())

    type_series = []
    type_of_house_series = []
    number_of_bedrooms_series = []
    acreage_series = []
    road_width_in_front_of_house_series = []
    facade_series = []
    number_of_floors_series = []
    number_of_toilets_series = []
    is_car_road_series = []
    cach_ngo_o_to_tranh_series = []
    alley_series = []
    the_direction_of_the_house_series = []
    belongProject_series = []
    bio_series = []

    for key in type_list:
        type_object = candidate_dict[key]
        acreage_list = type_object['acreage_list']
        type_list = type_object['type_list']
        type_of_house_list = type_object['type_of_house_list']

        road_width_in_front_of_house_list = type_object['road_width_in_front_of_house_list']
        facede_list = type_object['facede_list']
        number_of_floors_list = type_object['number_of_floors_list']
        number_of_toilets_list = type_object['number_of_toilets_list']
        is_car_road_list = type_object['is_car_road_list']
        cach_ngo_o_to_tranh_list = type_object['cach_ngo_o_to_tranh_list']
        alley_list = type_object['alley_list']
        the_direction_of_the_house_list = type_object['the_direction_of_the_house_list']
        belongProject_list = type_object['belongProject_list']

        for type in type_list:
            for type_of_house in type_of_house_list:
                for number_of_floors in number_of_floors_list:
                    for acreage in acreage_list:
                        for road_width_in_front_of_house in road_width_in_front_of_house_list:
                            for facede in facede_list:
                                for number_of_toilets in number_of_toilets_list:
                                    for is_car_road in is_car_road_list:
                                        for cach_ngo_o_to_tranh in cach_ngo_o_to_tranh_list:
                                            for alley in alley_list:
                                                for the_direction_of_the_house in the_direction_of_the_house_list:
                                                    for belongProject in belongProject_list:
                                                        min_num_of_floors = int(
                                                            number_of_floors * 1.5)
                                                        max_num_of_floors = int(
                                                            number_of_floors * 2)

                                                        for number_of_bedrooms in range(min_num_of_floors, max_num_of_floors, 2):
                                                            candidate = {
                                                                "detailed_address": detailed_address,
                                                                "number_of_floors": number_of_floors,
                                                                "acreage": acreage,
                                                                "facede": facede,
                                                                "is_car_road": is_car_road,
                                                                "number_of_bedrooms": number_of_bedrooms,

                                                            }

                                                            bio = type + \
                                                                " tại {detailed_address}." + \
                                                                gen_text(
                                                                    candidate)
                                                            bio_series.append(
                                                                bio)
                                                            acreage_series.append(
                                                                acreage)
                                                            type_series.append(
                                                                type)
                                                            type_of_house_series.append(
                                                                type_of_house)
                                                            road_width_in_front_of_house_series.append(
                                                                road_width_in_front_of_house)
                                                            facade_series.append(
                                                                facede)
                                                            number_of_floors_series.append(
                                                                number_of_floors)
                                                            number_of_bedrooms_series.append(
                                                                number_of_bedrooms)
                                                            number_of_toilets_series.append(
                                                                number_of_toilets)
                                                            is_car_road_series.append(
                                                                is_car_road)
                                                            cach_ngo_o_to_tranh_series.append(
                                                                cach_ngo_o_to_tranh)
                                                            alley_series.append(
                                                                alley)
                                                            the_direction_of_the_house_series.append(
                                                                the_direction_of_the_house)
                                                            belongProject_series.append(
                                                                belongProject)

    feature_df["bio"] = bio_series
    feature_df["acreage"] = acreage_series
    feature_df["type"] = type_series
    feature_df["road_width_in_front_of_house"] = road_width_in_front_of_house_series
    feature_df["facede"] = facade_series
    feature_df["type_of_house"] = type_of_house_series
    feature_df["number_of_bedrooms"] = number_of_bedrooms_series
    feature_df["number_of_floors"] = number_of_floors_series
    feature_df["number_of_toilets"] = number_of_toilets_series
    feature_df["is_car_road"] = is_car_road_series
    feature_df["cach_ngo_o_to_tranh"] = cach_ngo_o_to_tranh_series
    feature_df["alley"] = alley_series
    feature_df["the_direction_of_the_house"] = the_direction_of_the_house_series
    feature_df["belongProject"] = belongProject_series

    feature_df['join'] = 1
    test_df['join'] = 1
    test_df = test_df.merge(feature_df, how='left', on=['join'])

    test_df['bio'] = test_df['bio'].apply(preprocess_text)

    data = []
    labels = [0 for _ in range(len(bio_series))]

    for i, content in enumerate(bio_series):
        data.append({'content': content, 'category': labels[i]})
    features_text, _ = FeatureExtraction(data=data).get_data_and_label_tfidf()

    word_features = vectorizer.transform(features_text)

    test_df['distance_from_center'] = test_df.apply(lambda x: distance_func(
        x['lat'], x['lon'], x['lat_center'], x['lon_center']), axis=1)
    test_df['distance_from_center'] = test_df['distance_from_center'].apply(
        preprocess_distance)

    test_df['overall_average_price_max'] = test_df['overall_average_price'].max()
    test_df['overall_average_price_min'] = test_df['overall_average_price'].min()
    test_df['overall_average_price_ratio_max'] = test_df['overall_average_price'] / \
        test_df['overall_average_price'].max()
    test_df['overall_average_price_ratio_min'] = test_df['overall_average_price'] / \
        test_df['overall_average_price'].min()

    test_df['distance_from_center'] = test_df['distance_from_center'] / 8814.734712

    for distance in [1000, 2000]:
        far_or_not_cols = []

        distance_input_arr = test_df.loc[:, distance_cols].values
        tmp = np.array(far_or_not_by_list(distance_input_arr, distance))

        for i, c in enumerate(distance_cols):
            test_df[f'{c}_{distance}'] = tmp[:, i]

    acreage_list = test_df['acreage'].tolist()
    acreage_sum_list = test_df['acreage_sum'].tolist()

    acreage_ratio_list = [
        acreage_list[i] / (acreage_sum_list[i] * 1000 * 1000) for i in range(len(acreage_list))]

    test_df['acreage_ratio'] = acreage_ratio_list

    features = test_df[trained_cols].values

    features_with_text = scipy.sparse.hstack(
        (features.astype(float), word_features), format='csr')

    return features_with_text, test_df

async def preprocessing_data_v2(alley_list, bio_list, detailed_address_list, administrative_genre_list, ward_list, road_list, district_list, lat_list, lon_list, road_width_in_front_of_house_list, facade_list, the_direction_of_the_house_list, acreage_list, is_car_road_list, number_of_bedrooms_list, number_of_floors_list, number_of_toilets_list, facility_count_list=[], place_vars=[], necessary_vars=[], feature_cols_list=[]):

    try:
        park_df, road_df, commercial_df, population_df = place_vars[
            0], place_vars[1], place_vars[2], place_vars[3]
        district_label_encoder, administrative_genre_label_encoder, vectorizer, alley_desc, district_label_encoder, district_sys, ward_label_encoder, road_label_encoder, the_direction_of_the_house, house_direction_desc = necessary_vars[
            0], necessary_vars[1], necessary_vars[2], necessary_vars[3], necessary_vars[4], necessary_vars[5], necessary_vars[6], necessary_vars[7], necessary_vars[8], necessary_vars[9]
        trained_cols_v3, trained_cols_v2, trained_cols, distance_cols = feature_cols_list[
            0], feature_cols_list[1], feature_cols_list[2], feature_cols_list[3]
    except:
        print("Error when read loaded data into preprocessing data v2")

    elevation_list = []
    for i, lat in enumerate(lat_list):
        elevation = np.nan
        # lon = lon_list[i]
        # try:
        #     elevation_url = f"https://maps.googleapis.com/maps/api/elevation/json?locations={lat}%2C-{lon}&key={API_KEY_GOOGLE}"
        #     response = requests.get(elevation_url)
        #     data = response.json()
        #     elevation = data['results'][0]['elevation']
        # except:
        #     print("Error when call elevation api")
        elevation_list.append(elevation)

    test_df = pd.DataFrame()

    columns = ['lat', 'lon', 'district', 'administrative_genre']
    cols = ["university", "fuel", "cafe", "parking", "parking_entrance", "fast_food", "marketplace", "restaurant",
                         "hospital", "school", "kindergarten", "townhall - community_centre", "police", "place_of_worship", "bank", "atm"]
    columns = columns + cols
    facility_df = pd.DataFrame(columns=columns)

    facility_df['lat'] = lat_list
    facility_df['lon'] = lon_list
    facility_df['district'] = district_list
    facility_df['administrative_genre'] = administrative_genre_list


    try:

        if len(facility_count_list) > 0:
            values = facility_count_list
        else:

            values = await get_num_facilities_based_location_list_util(LocationListConfig(
                lat_list = lat_list,
                lon_list = lon_list,
                distance = 1000
            ))
    except:
        print("Error in get number of facilities based on location list in preprocessing_data_v2 function")

    for i, value in enumerate(values):
        for j, col in enumerate(cols):
                try:
                    facility_df.at[i, col] = value[col]
                except:
                    facility_df.at[i, col] = 0

    test_df = facility_df.copy()
    test_df['elevation'] = elevation_list

    test_df = cal_distance_to_type_of_place(test_df, PlaceInformationConfig(
        park_df = park_df,
        road_df = road_df,
        commercial_df = commercial_df
    ))

    try:
        test_df['district'] = test_df['district'].apply(preprocess_text)
    except:
        print("Error occurs when preprocess text for district name")

    try:
        population_df = population_df.rename(columns={'name': 'district', 'acreage': 'acreage_sum',
                                             'lat': 'lat_center', 'lon': 'lon_center', 'average_price': 'overall_average_price'})
    except:
        print("Error occurs when rename columns of population dataframe")

    try:
        test_df = test_df.merge(population_df, how='left', on=['district'])
    except:
        print("Error occurs when merging population dataframe with test dataframe")

    try:
        test_df['district'] = district_label_encoder.transform(
            test_df['district'].tolist())
    except:
        print("Error in labeling encoder for district")
        raise HTTPException(
            status_code=500, detail=f"District must be in {district_sys['district_list']}")

    test_df['administrative_genre'] = facility_df['administrative_genre'].tolist()
    test_df['administrative_genre'] = administrative_genre_label_encoder.transform(
        test_df['administrative_genre'].tolist())

    feature_df = pd.DataFrame()

    try:
        ward_series = ward_label_encoder.transform(ward_list)
    except:
        ward_series = [-1 for _ in range(len(road_list))]

    try:
        road_series = road_label_encoder.transform(road_list)
    except:
        road_series = [-1 for _ in range(len(road_list))]

    number_of_bedrooms_series = number_of_bedrooms_list
    acreage_series = acreage_list
    road_width_in_front_of_house_series = road_width_in_front_of_house_list
    facade_series = facade_list
    number_of_floors_series = number_of_floors_list
    number_of_toilets_series = number_of_toilets_list
    is_car_road_series = is_car_road_list
    cach_ngo_o_to_tranh_series = np.nan
    alley_series = alley_list

    try:
        the_direction_of_the_house_series = the_direction_of_the_house.transform(
            [house_direction_desc[the_direction_of_the_house]])
    except:
        the_direction_of_the_house_series = np.nan

    feature_df["road"] = road_series
    feature_df["ward"] = ward_series
    feature_df["bio"] = bio_list
    feature_df["acreage"] = acreage_series
    feature_df["road_width_in_front_of_house"] = road_width_in_front_of_house_series
    feature_df["facede"] = facade_series
    feature_df["number_of_bedrooms"] = number_of_bedrooms_series
    feature_df["number_of_floors"] = number_of_floors_series
    feature_df["number_of_toilets"] = number_of_toilets_series
    feature_df["is_car_road"] = is_car_road_series
    feature_df["cach_ngo_o_to_tranh"] = cach_ngo_o_to_tranh_series
    feature_df["alley"] = alley_series
    feature_df["the_direction_of_the_house"] = the_direction_of_the_house_series

    test_df = pd.concat([test_df, feature_df], axis=1)
    test_df['bio'] = test_df['bio'].apply(preprocess_text)

    data = []
    labels = [0 for _ in range(len(bio_list))]
    for i, content in enumerate(bio_list):
        data.append({'content': content, 'category': labels[i]})
    features_text, _ = FeatureExtraction(data=data).get_data_and_label_tfidf()

    word_features = vectorizer.transform(features_text)

    test_df['distance_from_center'] = test_df.apply(lambda x: distance_func(
        x['lat'], x['lon'], x['lat_center'], x['lon_center']), axis=1)
    test_df['distance_from_center'] = test_df['distance_from_center'].apply(
        preprocess_distance)

    test_df['overall_average_price_max'] = test_df['overall_average_price'].max()
    test_df['overall_average_price_min'] = test_df['overall_average_price'].min()
    test_df['overall_average_price_ratio_max'] = test_df['overall_average_price'] / \
        test_df['overall_average_price'].max()
    test_df['overall_average_price_ratio_min'] = test_df['overall_average_price'] / \
        test_df['overall_average_price'].min()

    test_df['distance_from_center'] = test_df['distance_from_center'] / 8814.734712

    try:
        for distance in [1000, 2000]:
            far_or_not_cols = []

            distance_input_arr = test_df.loc[:, distance_cols].values
            tmp = np.array(far_or_not_by_list(distance_input_arr, distance))

            for i, c in enumerate(distance_cols):
                test_df[f'{c}_{distance}'] = tmp[:, i]

    except:
        print("Error occurs when checking that distance is whether far or not")

    acreage_list = test_df['acreage'].tolist()
    acreage_sum_list = test_df['acreage_sum'].tolist()

    acreage_ratio_list = [
        acreage_list[i] / (acreage_sum_list[i] * 1000 * 1000) for i in range(len(acreage_list))]

    test_df['acreage_ratio'] = acreage_ratio_list

    features = test_df[trained_cols_v2].values

    try:
        features_with_text = scipy.sparse.hstack(
            (features.astype(float), word_features), format='csr')
    except:
        print("Error when stacking numerical features and text features")

    return features_with_text, test_df


async def preprocessing_data_alley_type(lat, lon, district, administrative_genre, detailed_address, facility_count_list=[], place_vars=[], necessary_vars=[], feature_cols_list=[]):
    try:
        park_df, road_df, commercial_df, population_df = place_vars[
            0], place_vars[1], place_vars[2], place_vars[3]
        district_label_encoder, administrative_genre_label_encoder, vectorizer, alley_desc, district_label_encoder, district_sys, ward_label_encoder, road_label_encoder, the_direction_of_the_house, house_direction_desc = necessary_vars[
            0], necessary_vars[1], necessary_vars[2], necessary_vars[3], necessary_vars[4], necessary_vars[5], necessary_vars[6], necessary_vars[7], necessary_vars[8], necessary_vars[9]
        trained_cols_v3, trained_cols_v2, trained_cols, distance_cols = feature_cols_list[
            0], feature_cols_list[1], feature_cols_list[2], feature_cols_list[3]
    except:
        print("Error when read loaded data into preprocessing_data_alley_type")

    elevation = np.nan
    # try:
    #     elevation_url = f"https://maps.googleapis.com/maps/api/elevation/json?locations={lat}%2C-{lon}&key={API_KEY_GOOGLE}"
    #     response = requests.get(elevation_url)
    #     data = response.json()
    #     elevation = data['results'][0]['elevation']

    # except:
    #     print("Error when call elevation api")
    test_df = pd.DataFrame()

    facility_df = await wrap_facility_info(DetailedLocationConfig(
        lat=lat,
        lon=lon,
        district=district,
        administrative_genre=administrative_genre
    ), facility_count_list)

    test_df = facility_df.copy()
    test_df['elevation'] = elevation

    test_df = cal_distance_to_type_of_place(test_df, PlaceInformationConfig(
        park_df = park_df,
        road_df = road_df,
        commercial_df = commercial_df
    ))

    population_df = population_df.rename(columns={'name': 'district', 'acreage': 'acreage_sum',
                                         'lat': 'lat_center', 'lon': 'lon_center', 'average_price': 'overall_average_price'})
    test_df = test_df.merge(population_df, how='left', on=['district'])

    test_df['district'] = district_label_encoder.transform(
        test_df['district'].tolist())

    test_df['administrative_genre'] = facility_df['administrative_genre'].tolist()
    test_df['administrative_genre'] = administrative_genre_label_encoder.transform(
        test_df['administrative_genre'].tolist())

    feature_df = pd.DataFrame()

    candidate_dict = get_candidate_dict_by_version(ver = 'alley')

    type_list = list(candidate_dict.keys())

    type_series = []
    type_of_house_series = []
    number_of_bedrooms_series = []
    acreage_series = []
    road_width_in_front_of_house_series = []
    facade_series = []
    number_of_floors_series = []
    number_of_toilets_series = []
    is_car_road_series = []
    cach_ngo_o_to_tranh_series = []
    alley_series = []
    the_direction_of_the_house_series = []
    belongProject_series = []
    bio_series = []

    for key in type_list:
        type_object = candidate_dict[key]
        acreage_list = type_object['acreage_list']
        type_list = type_object['type_list']
        type_of_house_list = type_object['type_of_house_list']

        road_width_in_front_of_house_list = type_object['road_width_in_front_of_house_list']
        facede_list = type_object['facede_list']
        number_of_floors_list = type_object['number_of_floors_list']
        number_of_toilets_list = type_object['number_of_toilets_list']
        is_car_road_list = type_object['is_car_road_list']
        cach_ngo_o_to_tranh_list = type_object['cach_ngo_o_to_tranh_list']
        alley_list = type_object['alley_list']
        the_direction_of_the_house_list = type_object['the_direction_of_the_house_list']
        belongProject_list = type_object['belongProject_list']

        for type in type_list:
            for type_of_house in type_of_house_list:
                for number_of_floors in number_of_floors_list:
                    for acreage in acreage_list:
                        for road_width_in_front_of_house in road_width_in_front_of_house_list:
                            for facede in facede_list:
                                for number_of_toilets in number_of_toilets_list:
                                    for is_car_road in is_car_road_list:
                                        if type_of_house == 2 and road_width_in_front_of_house < 3:
                                            is_car_road = 0
                                        else:
                                            is_car_road = 1
                                        for cach_ngo_o_to_tranh in cach_ngo_o_to_tranh_list:
                                            for alley in alley_list:
                                                for the_direction_of_the_house in the_direction_of_the_house_list:
                                                    for belongProject in belongProject_list:
                                                        min_num_of_floors = int(
                                                            number_of_floors * 1.5)
                                                        max_num_of_floors = int(
                                                            number_of_floors * 2)

                                                        for number_of_bedrooms in range(min_num_of_floors, max_num_of_floors, 2):

                                                            add_detail = ""
                                                            if is_car_road == 1 and type_of_house == 2:
                                                                add_detail = add_detail + \
                                                                    f"Ngõ rộng {road_width_in_front_of_house}m. Ngõ ô tô đi thoải mái."
                                                            candidate = {
                                                                "detailed_address": detailed_address,
                                                                "number_of_floors": number_of_floors,
                                                                "acreage": acreage,
                                                                "facede": facede,
                                                                "is_car_road": is_car_road,
                                                                "number_of_bedrooms": number_of_bedrooms,

                                                            }

                                                            bio = "".join([type, ".", gen_text(
                                                                candidate) + f".{add_detail}"])
                                                            bio_series.append(
                                                                bio)
                                                            acreage_series.append(
                                                                acreage)
                                                            type_series.append(
                                                                type)
                                                            type_of_house_series.append(
                                                                type_of_house)
                                                            road_width_in_front_of_house_series.append(
                                                                road_width_in_front_of_house)
                                                            facade_series.append(
                                                                facede)
                                                            number_of_floors_series.append(
                                                                number_of_floors)
                                                            number_of_bedrooms_series.append(
                                                                number_of_bedrooms)
                                                            number_of_toilets_series.append(
                                                                number_of_toilets)
                                                            is_car_road_series.append(
                                                                is_car_road)
                                                            cach_ngo_o_to_tranh_series.append(
                                                                cach_ngo_o_to_tranh)
                                                            alley_series.append(
                                                                alley)
                                                            the_direction_of_the_house_series.append(
                                                                the_direction_of_the_house)
                                                            belongProject_series.append(
                                                                belongProject)

    feature_df["bio"] = bio_series
    feature_df["acreage"] = acreage_series
    feature_df["type"] = type_series
    feature_df["road_width_in_front_of_house"] = road_width_in_front_of_house_series
    feature_df["facede"] = facade_series
    feature_df["type_of_house"] = type_of_house_series
    feature_df["number_of_bedrooms"] = number_of_bedrooms_series
    feature_df["number_of_floors"] = number_of_floors_series
    feature_df["number_of_toilets"] = number_of_toilets_series
    feature_df["is_car_road"] = is_car_road_series
    feature_df["cach_ngo_o_to_tranh"] = cach_ngo_o_to_tranh_series
    feature_df["alley"] = alley_series
    feature_df["the_direction_of_the_house"] = the_direction_of_the_house_series
    feature_df["belongProject"] = belongProject_series

    feature_df['join'] = 1
    test_df['join'] = 1
    test_df = test_df.merge(feature_df, how='left', on=['join'])

    test_df['bio'] = test_df['bio'].apply(preprocess_text)

    labels = [0 for _ in range(len(bio_series))]
    data = [{'content': content, 'category': labels[i]}
            for i, content in enumerate(bio_series)]

    features_text, _ = FeatureExtraction(data=data).get_data_and_label_tfidf()

    word_features = vectorizer.transform(features_text)

    test_df['distance_from_center'] = test_df.apply(lambda x: distance_func(
        x['lat'], x['lon'], x['lat_center'], x['lon_center']), axis=1)
    test_df['distance_from_center'] = test_df['distance_from_center'].apply(
        preprocess_distance)

    test_df['overall_average_price_max'] = test_df['overall_average_price'].max()
    test_df['overall_average_price_min'] = test_df['overall_average_price'].min()
    test_df['overall_average_price_ratio_max'] = test_df['overall_average_price'] / \
        test_df['overall_average_price'].max()
    test_df['overall_average_price_ratio_min'] = test_df['overall_average_price'] / \
        test_df['overall_average_price'].min()

    test_df['distance_from_center'] = test_df['distance_from_center'] / 8814.734712

    for distance in [1000, 2000]:
        far_or_not_cols = []

        distance_input_arr = test_df.loc[:, distance_cols].values
        tmp = np.array(far_or_not_by_list(distance_input_arr, distance))

        for i, c in enumerate(distance_cols):
            test_df[f'{c}_{distance}'] = tmp[:, i]

    acreage_list = test_df['acreage'].tolist()
    acreage_sum_list = test_df['acreage_sum'].tolist()

    acreage_ratio_list = [
        acreage_list[i] / (acreage_sum_list[i] * 1000 * 1000) for i in range(len(acreage_list))]

    test_df['acreage_ratio'] = acreage_ratio_list

    features = test_df[trained_cols].values
    features_with_text = scipy.sparse.hstack(
        (features.astype(float), word_features), format='csr')

    return features_with_text, test_df
