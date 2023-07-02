import re


class Message:
    KEY_REQUIRED = 'Missing keys'
    INVALID_VALUE = 'Invalid value'


class OpenstreetMap:
    MAIN_DOMAIN = 'http://65.109.112.52'
    API_PATH = '/api/interpreter'


class MeanOfFacility:
    TOWNHALL = 'townhall'
    COMMUNITY_CENTER = 'community_centre'


class Char:
    UNICHARS = "àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶÈÉẺẼẸÊỀẾỂỄỆĐÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴÂĂĐÔƠƯ"
    UNSIGNCHARS = "aaaaaaaaaaaaaaaaaeeeeeeeeeeediiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAAEEEEEEEEEEEDIIIOOOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYAADOOU"
    CHAR1252 = 'à|á|ả|ã|ạ|ầ|ấ|ẩ|ẫ|ậ|ằ|ắ|ẳ|ẵ|ặ|è|é|ẻ|ẽ|ẹ|ề|ế|ể|ễ|ệ|ì|í|ỉ|ĩ|ị|ò|ó|ỏ|õ|ọ|ồ|ố|ổ|ỗ|ộ|ờ|ớ|ở|ỡ|ợ|ù|ú|ủ|ũ|ụ|ừ|ứ|ử|ữ|ự|ỳ|ý|ỷ|ỹ|ỵ|À|Á|Ả|Ã|Ạ|Ầ|Ấ|Ẩ|Ẫ|Ậ|Ằ|Ắ|Ẳ|Ẵ|Ặ|È|É|Ẻ|Ẽ|Ẹ|Ề|Ế|Ể|Ễ|Ệ|Ì|Í|Ỉ|Ĩ|Ị|Ò|Ó|Ỏ|Õ|Ọ|Ồ|Ố|Ổ|Ỗ|Ộ|Ờ|Ớ|Ở|Ỡ|Ợ|Ù|Ú|Ủ|Ũ|Ụ|Ừ|Ứ|Ử|Ữ|Ự|Ỳ|Ý|Ỷ|Ỹ|Ỵ'
    CHARUTF8 = "à|á|ả|ã|ạ|ầ|ấ|ẩ|ẫ|ậ|ằ|ắ|ẳ|ẵ|ặ|è|é|ẻ|ẽ|ẹ|ề|ế|ể|ễ|ệ|ì|í|ỉ|ĩ|ị|ò|ó|ỏ|õ|ọ|ồ|ố|ổ|ỗ|ộ|ờ|ớ|ở|ỡ|ợ|ù|ú|ủ|ũ|ụ|ừ|ứ|ử|ữ|ự|ỳ|ý|ỷ|ỹ|ỵ|À|Á|Ả|Ã|Ạ|Ầ|Ấ|Ẩ|Ẫ|Ậ|Ằ|Ắ|Ẳ|Ẵ|Ặ|È|É|Ẻ|Ẽ|Ẹ|Ề|Ế|Ể|Ễ|Ệ|Ì|Í|Ỉ|Ĩ|Ị|Ò|Ó|Ỏ|Õ|Ọ|Ồ|Ố|Ổ|Ỗ|Ộ|Ờ|Ớ|Ở|Ỡ|Ợ|Ù|Ú|Ủ|Ũ|Ụ|Ừ|Ứ|Ử|Ữ|Ự|Ỳ|Ý|Ỷ|Ỹ|Ỵ"
    VOWEL_TABLE = [['a', 'à', 'á', 'ả', 'ã', 'ạ', 'a'],
                   ['ă', 'ằ', 'ắ', 'ẳ', 'ẵ', 'ặ', 'aw'],
                   ['â', 'ầ', 'ấ', 'ẩ', 'ẫ', 'ậ', 'aa'],
                   ['e', 'è', 'é', 'ẻ', 'ẽ', 'ẹ', 'e'],
                   ['ê', 'ề', 'ế', 'ể', 'ễ', 'ệ', 'ee'],
                   ['i', 'ì', 'í', 'ỉ', 'ĩ', 'ị', 'i'],
                   ['o', 'ò', 'ó', 'ỏ', 'õ', 'ọ', 'o'],
                   ['ô', 'ồ', 'ố', 'ổ', 'ỗ', 'ộ', 'oo'],
                   ['ơ', 'ờ', 'ớ', 'ở', 'ỡ', 'ợ', 'ow'],
                   ['u', 'ù', 'ú', 'ủ', 'ũ', 'ụ', 'u'],
                   ['ư', 'ừ', 'ứ', 'ử', 'ữ', 'ự', 'uw'],
                   ['y', 'ỳ', 'ý', 'ỷ', 'ỹ', 'ỵ', 'y']]

    FIRST_CHAR_TABLE = ['', 'f', 's', 'r', 'x', 'j']
    REGEX_UNICODE_TEMPLATE = r'à|á|ả|ã|ạ|ầ|ấ|ẩ|ẫ|ậ|ằ|ắ|ẳ|ẵ|ặ|è|é|ẻ|ẽ|ẹ|ề|ế|ể|ễ|ệ|ì|í|ỉ|ĩ|ị|ò|ó|ỏ|õ|ọ|ồ|ố|ổ|ỗ|ộ|ờ|ớ|ở|ỡ|ợ|ù|ú|ủ|ũ|ụ|ừ|ứ|ử|ữ|ự|ỳ|ý|ỷ|ỹ|ỵ|À|Á|Ả|Ã|Ạ|Ầ|Ấ|Ẩ|Ẫ|Ậ|Ằ|Ắ|Ẳ|Ẵ|Ặ|È|É|Ẻ|Ẽ|Ẹ|Ề|Ế|Ể|Ễ|Ệ|Ì|Í|Ỉ|Ĩ|Ị|Ò|Ó|Ỏ|Õ|Ọ|Ồ|Ố|Ổ|Ỗ|Ộ|Ờ|Ớ|Ở|Ỡ|Ợ|Ù|Ú|Ủ|Ũ|Ụ|Ừ|Ứ|Ử|Ữ|Ự|Ỳ|Ý|Ỷ|Ỹ|Ỵ'
    EMOJI_PATTERN = re.compile("["
                               u"\U0001F600-\U0001F64F"  # emoticons
                               u"\U0001F300-\U0001F5FF"  # symbols & pictographs
                               u"\U0001F680-\U0001F6FF"  # transport & map symbols
                               u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
                               "]+", flags=re.UNICODE)


class Distance:
    RADIUS = 6371
    MULTIPLE_TRANSFORM_COEFF = 10 / 1000
    DISTANCE_THRESHOLD = 10000


class FilePath:

    MAIN_FILE_PATH = 'app/files'

    MAIN_LABEL_ENCODER_PATH = f'{MAIN_FILE_PATH}/labelencoder'
    DISTRICT_LABEL_ENCODER = f'{MAIN_LABEL_ENCODER_PATH}/district_label_encoder.pkl'
    ADMINISTRATIVE_GENRE_LABEL_ENCODER = f'{MAIN_LABEL_ENCODER_PATH}/administrative_genre_label_encoder.pkl'
    WARD_LABEL_ENCODER = f'{MAIN_LABEL_ENCODER_PATH}/ward.pkl'
    ROAD_LABEL_ENCODER = f'{MAIN_LABEL_ENCODER_PATH}/road.pkl'
    DIRECTION_LABEL_ENCODER = f'{MAIN_LABEL_ENCODER_PATH}/the_direction_of_the_house.pkl'

    VECTOR_EMBEDDING = f'{MAIN_FILE_PATH}/embedding/VECTOR_EMBEDDING.pkl'

    MAIN_JSON_PATH = f'{MAIN_FILE_PATH}/json'
    OPENAPI_PATH = f'/{MAIN_JSON_PATH}/openapi.json'
    ALLEY_DESC = f'{MAIN_JSON_PATH}/alley_desc.json'
    DISTRICT_DESC = f'{MAIN_JSON_PATH}/districts.json'
    DISTRICT_STATS = f'{MAIN_JSON_PATH}/district_stats.json'
    MODIFIED_DISTRICT_STATS = f'{MAIN_JSON_PATH}/district_stats.json'

    HOUSE_DIRECTION_DESC = f'{MAIN_JSON_PATH}/house_direction_desc.json'
    MEAN_OF_FACILITY_DESC = f'{MAIN_JSON_PATH}/means_of_facility.json'
    CENTER_GEOLOCATION = f'{MAIN_JSON_PATH}/center_geolocation.json'
    GEOLOCATION = f'{MAIN_JSON_PATH}/geolocation.json'
    DETAILED_LOCATION = f'{MAIN_JSON_PATH}/detailed_location.json'

    REAL_ESTATE_PRICE = f'{MAIN_JSON_PATH}/real_estate_price.json'

    MAIN_TABLE_PATH = f'{MAIN_FILE_PATH}/table'
    ROAD_DESC = f'{MAIN_TABLE_PATH}/best_road_place.csv'
    PARK_DESC = f'{MAIN_TABLE_PATH}/best_park.csv'
    COMMERCIAL_DESC = f'{MAIN_TABLE_PATH}/best_commercial_center_place.csv'
    POPULATION_DESC = f'{MAIN_TABLE_PATH}/population.csv'

    MAIN_CHECKPOINT_PATH = f'{MAIN_FILE_PATH}/checkpoints'
    PRICE_MODEL_V3 = f'{MAIN_CHECKPOINT_PATH}/text_and_tab_v3/model_'
    PRICE_MODEL_V1 = f'{MAIN_CHECKPOINT_PATH}/text_and_tab/model_'

    PRICE_FEATURES = f'{MAIN_JSON_PATH}/columns/prediction_price_features.json'
    DISTANCE_FEATURES = f'{MAIN_JSON_PATH}/columns/distance_features.json'

    ALL_STREET_GEOLOCATION = f'{MAIN_JSON_PATH}/geolocation/district'
    STREET_PRICE = f'{MAIN_JSON_PATH}/price/district'
    GROUP_PRICE = f'{MAIN_JSON_PATH}/price'



