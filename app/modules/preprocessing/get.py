import numpy as np
from fastapi import HTTPException
from app.modules.nlp.service import preprocess_text
from app.modules.io.service import IOReader
from app.utils.constant import FilePath

def get_candidate_dict_by_version(ver):
    if ver == 1:
        return {
            "3": {
                "type_list": ["Bán nhà trong ngõ"],
                "type_of_house_list": [3],
                "acreage_list": [30, 215],
                "road_width_in_front_of_house_list": [2, 5],
                "facede_list": [3, 7],
                "number_of_toilets_list": [np.nan],
                "number_of_floors_list": [1, 5],
                "is_car_road_list": [0, 1],
                "cach_ngo_o_to_tranh_list": [100, np.nan],
                "alley_list": [1],
                "the_direction_of_the_house_list": [np.nan],
                "belongProject_list": [0]
            },
            "2": {
                "type_list": ["Bán nhà mặt phố"],
                "type_of_house_list": [2],
                "acreage_list": [30, 215],
                "road_width_in_front_of_house_list": [np.nan],
                "facede_list": [3, 7],
                "number_of_toilets_list": [np.nan],
                "number_of_floors_list": [1, 5],
                "is_car_road_list": [1],
                "cach_ngo_o_to_tranh_list": [np.nan],
                "alley_list": [0],
                "the_direction_of_the_house_list": [np.nan],
                "belongProject_list": [0]
            }
        }

    if ver == 'alley':
        return {
            "3": {
                "type_list": ["Bán nhà trong ngõ"],
                "type_of_house_list": [3],
                "acreage_list": [30, 215],
                "road_width_in_front_of_house_list": [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7.5, 8, 9.5, 9, 10, 11],
                "facede_list": [3, 7],
                "number_of_toilets_list": [np.nan],
                "number_of_floors_list": [1, 5],
                "is_car_road_list": [np.nan],
                "cach_ngo_o_to_tranh_list": [100, np.nan],
                "alley_list": [1],
                "the_direction_of_the_house_list": [np.nan],
                "belongProject_list": [0]
            },
            "2": {
                "type_list": ["Bán nhà mặt phố"],
                "type_of_house_list": [2],
                "acreage_list": [30, 215],
                "road_width_in_front_of_house_list": [np.nan],
                "facede_list": [3, 7],
                "number_of_toilets_list": [np.nan],
                "number_of_floors_list": [1, 5],
                "is_car_road_list": [1],
                "cach_ngo_o_to_tranh_list": [np.nan],
                "alley_list": [0],
                "the_direction_of_the_house_list": [np.nan],
                "belongProject_list": [0]
            }
        }

def get_necessary_values(data_list):
    bio_list_2d = []
    ward_list = []
    road_list = []
    district_list = []
    detailed_address_list = []
    lat_list = []
    lon_list = []
    road_width_in_front_of_house_list = []
    facade_list = []
    the_direction_of_the_house_list = []
    acreage_list = []
    is_car_road_list = []
    number_of_toilets_list = []
    number_of_bedrooms_list = []
    number_of_floors_list = []
    alley_list = 1

    alley_desc = IOReader('json', FilePath.ALLEY_DESC).read()

    administrative_genre_list = preprocess_text("quận")
    for data in data_list:
        bio_list = []
        try:
            ward = data['ward']
            ward = preprocess_text(ward)
            bio_list.append(f'Bán nhà tại phường {ward}')
        except:
            ward = np.nan
            print("Ward is empty")
        ward_list.append(ward)

        try:
            road = data['street']
            road = preprocess_text(road)
            bio_list.append(f'Bán nhà tại đường {road}')
        except:
            road = np.nan
            print("road is empty")
        road_list.append(road)

        try:
            district = data['district']
            district = preprocess_text(district)
            bio_list.append(f'Bán nhà tại quận {district}')
        except:
            print("district is required")

        district_list.append(district)

        try:
            try:
                address_comp1 = data['addressDetails']
            except:
                address_comp1 = ""

            try:
                address_comp2 = data['ward']
            except:
                address_comp2 = ""

            try:
                address_comp3 = data['street']
            except:
                address_comp3 = ""

            try:
                address_comp4 = data['district']
            except:
                address_comp4 = ""

            try:
                address_comp5 = data['city']
            except:
                address_comp5 = ""

            try:
                address_comp6 = data['country']
            except:
                address_comp6 = ""

            detailed_address = [address_comp1, address_comp2,
                                address_comp3, address_comp4, address_comp5, address_comp6]
            detailed_address = ",".join(detailed_address)
            detailed_address = preprocess_text(detailed_address)
            bio_list.append(f'Bán nhà tại {detailed_address}')
        except:
            detailed_address = ""

        detailed_address_list.append(detailed_address)

        try:
            lat = data['geolocation']['latitude']
            lon = data['geolocation']['longitude']

            lat_list.append(lat)
            lon_list.append(lon)
        except:
            raise HTTPException(
                status_code=500, detail="Lat, lon are required")

        try:
            road_width_in_front_of_house = data['frontRoadWidth']
            bio_list.append(
                f'Đường trước mặt rộng {road_width_in_front_of_house}m')
        except:
            road_width_in_front_of_house = np.nan

            print("frontRoadWidth is empty")

        road_width_in_front_of_house_list.append(road_width_in_front_of_house)

        try:
            facade = data['frontWidth']
            bio_list.append(f"{facade}M MT")
        except:
            facade = np.nan
            print("facade is empty")

        facade_list.append(facade)

        try:
            the_direction_of_the_house = data['houseDirection']
        except:

            the_direction_of_the_house = np.nan
            print("houseDirection is empty")

        the_direction_of_the_house_list.append(the_direction_of_the_house)

        try:
            acreage = data['landSize']
            bio_list.append(f"Diện tích {acreage}m²")
            bio_list.append(f"{acreage}m²")
        except:
            acreage = np.nan
            print("acreage is empty")

        acreage_list.append(acreage)

        alley = 1

        try:
            accessibility = data['accessibility']
            is_car_road = 1
            if accessibility in ['theBottleNeckPoint', 'narrowRoad', 'fitTwoMotorbikes']:
                is_car_road = 0

            if is_car_road == 1:
                bio_list.append('Ngõ ô tô')
            else:
                bio_list.append('Cách ra ô tô')
                bio_list.append('ngõ ô tô cách')

            bio_list.append(alley_desc[accessibility])

            if accessibility == 'notInTheAlley':
                alley = 0

        except:
            is_car_road = np.nan
            print("accessibility is empty")

        is_car_road_list.append(is_car_road)

        try:
            number_of_bedrooms = data['numberOfBedRooms']
            bio_list.append(f"Nhà có {number_of_bedrooms} phòng ngủ")
            bio_list.append(f"{number_of_bedrooms} phòng ngủ")
        except:
            number_of_bedrooms = np.nan

        number_of_bedrooms_list.append(number_of_bedrooms)

        try:
            number_of_floors = data['numberOfFloors']
            bio_list.append(f"Xây {number_of_floors} tầng")
            bio_list.append(f"{number_of_floors}t")
            bio_list.append(f"Thiết kế xây {number_of_floors}t")
            bio_list.append(f"Thiết kế xây {number_of_floors} tầng")
            bio_list.append(f"Thiết kế xây {number_of_floors}t")
        except:
            number_of_floors = np.nan

        number_of_floors_list.append(number_of_floors)

        try:
            number_of_toilets = data['numberOfBathRooms']
            bio_list.append(f"Nhà có {number_of_toilets} toilets")
            bio_list.append(f"{number_of_toilets} toilets")

            bio_list.append(f"Nhà có {number_of_toilets} toilet")
            bio_list.append(f"{number_of_toilets} toilet")

            bio_list.append(f"Nhà có {number_of_toilets} nvs")
            bio_list.append(f"{number_of_toilets} nvs")

        except:
            number_of_toilets = np.nan

        number_of_toilets_list.append(number_of_toilets)

        bio = '.'.join(bio_list)
        bio_list_2d.append(bio)

    return alley_list, bio_list_2d, detailed_address_list, administrative_genre_list, ward_list, road_list, district_list, lat_list, lon_list, road_width_in_front_of_house_list, facade_list, the_direction_of_the_house_list, acreage_list, is_car_road_list, number_of_bedrooms_list, number_of_floors_list, number_of_toilets_list