import lightgbm as lgb
import pandas as pd
from app.modules.io.service import IOReader
from app.utils.constant import FilePath

def read_necessary_vars():

    district_label_encoder = IOReader('pkl', FilePath.DISTRICT_LABEL_ENCODER).read()
    administrative_genre_label_encoder = IOReader('pkl', FilePath.ADMINISTRATIVE_GENRE_LABEL_ENCODER).read()
    vectorizer = IOReader('pkl', FilePath.VECTOR_EMBEDDING).read()
    ward_label_encoder = IOReader('pkl', FilePath.WARD_LABEL_ENCODER).read()
    road_label_encoder = IOReader('pkl', FilePath.ROAD_LABEL_ENCODER).read()
    the_direction_of_the_house = IOReader('pkl', FilePath.DIRECTION_LABEL_ENCODER).read()

    alley_desc = IOReader('json', FilePath.ALLEY_DESC).read()
    district_sys = IOReader('json', FilePath.DISTRICT_DESC).read()
    house_direction_desc = IOReader('json', FilePath.HOUSE_DIRECTION_DESC).read()

    return administrative_genre_label_encoder, vectorizer, alley_desc, district_label_encoder, district_sys, ward_label_encoder, road_label_encoder, the_direction_of_the_house, house_direction_desc

def read_pretrained_models():
    models = [lgb.Booster(model_file=f'{FilePath.PRICE_MODEL_V3}{i}.txt') for i in range(5)]
    return models

def read_pretrained_alley_models():
    models = [lgb.Booster(model_file=f'{FilePath.PRICE_MODEL_V1}{i}.txt') for i in range(5)]
    return models

def get_price_prediction_features_by_version(version=1):
    feature_dict = IOReader('json', FilePath.PRICE_FEATURES).read()
    key = f'v{version}'
    return feature_dict[key]

def read_distance_columns():
    feature_dict = IOReader('json', FilePath.DISTANCE_FEATURES).read()
    return feature_dict['cols']

def get_best_place():
    park_df = pd.read_csv(FilePath.PARK_DESC)
    road_df = pd.read_csv(FilePath.ROAD_DESC)
    commercial_df = pd.read_csv(FilePath.COMMERCIAL_DESC)
    population_df = pd.read_csv(FilePath.POPULATION_DESC)
    return park_df, road_df, commercial_df, population_df

def read_main_columns():
    try:
        trained_cols_v3 = get_price_prediction_features_by_version(version=3)
        trained_cols_v2 = get_price_prediction_features_by_version(version=2)
        trained_cols = get_price_prediction_features_by_version(version=1)
        distance_cols = read_distance_columns()
        return trained_cols_v3, trained_cols_v2, trained_cols, distance_cols
    except: # pylint: disable=bare-except
        print("Error when read columns")





