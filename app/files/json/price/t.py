import json
from tqdm import tqdm
district_list = list(json.load(
            open(f'./groupby_district_ward_street.json', encoding='utf-8')).keys())

data = json.load(
            open(f'../geolocation/street/hanoi_location.json', encoding='utf-8'))['data']

res = dict()

for sample in tqdm(data):
    district = sample['district']
    ward = sample['ward']
    street = sample['street']
    latitude = sample['geolocation']['latitude']
    longitude = sample['geolocation']['longitude']

    if district not in res.keys():
        res[district] = {
            ward: {
                street: {
                    "latitude": latitude,
                    "longitude": longitude
                }
            }
        }
    else:
        if ward not in res[district].keys():
            res[district][ward] = {
                street: {
                    "latitude": latitude,
                    "longitude": longitude
                }
            }
        else:

            if street not in res[district][ward].keys():
                res[district][ward][street] = {
                    "latitude": latitude,
                    "longitude": longitude
                }
            else:pass


with open('./tmp.json', 'w',  encoding='utf-8') as outfile:
    json.dump(res, outfile, ensure_ascii=False)



