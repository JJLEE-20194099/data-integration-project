from app.modules.io.service import IOReader
from app.utils.constant import FilePath

def get_prediction_map_by_district(district:str):
    street_list_by_district = IOReader('json', f'{FilePath.ALL_STREET_GEOLOCATION}/{district}.json').read()
    return street_list_by_district