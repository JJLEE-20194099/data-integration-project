
import json
from app.utils.constant import FilePath
features_list = [
    'country',
    'city',
    'district',
    'street',
    'ward'
    # 'latitude',
    # 'longitude'
]


feature_form_structure = {
    'General': [
        {
            'Label': 'country',
            'Data' :  {
                'Description': 'Country',
                'Form': {
                    '1': 'Việt Nam'
                }
            }
        },
        {
            'Label': 'city',
            'Data' :  {
                'Description': 'City',
                'Form': {
                    '1': 'Hà Nội'
                }
            }
        },
        {
            'Label': 'district',
            'Data' :  {
                'Description': 'District',
                'Form': json.load(
            open(FilePath.DISTRICT_DESC, encoding='utf-8'))["district_list"]
            }
        },
        {
            'Label': 'ward',
            'Data' :  {
                'Description': 'Ward',
                'Form': []
            }
        },
        {
            'Label': 'street',
            'Data' :  {
                'Description': 'Street',
                'Form': []
            }
        },
        # {
        #     'Label': 'landSize',
        #     'Data' :  {
        #         'Description': 'Lot size in square feet',
        #         'Form': 'float64'
        #     },
        # },
        # {
        #     'Label': 'numberOfBedRooms',
        #     'Data' :  {
        #         'Description': 'Number of bedrooms',
        #         'Form': 'int64',
        #     }
        # },
        # {
        #     'Label': 'numberOfBathrooms',
        #     'Data' :  {
        #         'Description': 'Number of batchrooms',
        #         'Form': 'int64',
        #     }
        # },
        # {
        #     'Label': 'numberOfFloors',
        #     'Data' :  {
        #         'Description': 'Number of floors',
        #         'Form': 'int64',
        #     }
        # },
        # {
        #     'Label': 'frontWidth',
        #     'Data' :  {
        #         'Description': 'Front width of house',
        #         'Form': 'int64',
        #     }
        # },
        # {
        #     'Label': 'latitude',
        #     'Data' :  {
        #         'Description': 'latitude',
        #         'Form': 'float64'
        #     },
        # },
        # {
        #     'Label': 'longitude',
        #     'Data' :  {
        #         'Description': 'longitude',
        #         'Form': 'float64'
        #     },
        # },

    ],
    'Construction': [

    ],
    'Basement': [
    ],
    'Utility': [

    ],
    'Bedroom': [
    ],
    'Kitchen': [
    ],
    'Garage': [
    ],
    'Others': [

    ],
}
