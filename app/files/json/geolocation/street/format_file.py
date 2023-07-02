import json

data = json.load(open('./hanoi.json', encoding='utf-8'))

format_data = []
data_by_district = dict()
for i in data:
    obj = i
    obj['geolocation'] = { "latitude": i['lat'], "longitude": i['lon'] }
    if i['district'] not in list(data_by_district.keys()):
        data_by_district[i['district']] = [obj]
    else:
        data_by_district[i['district']].append(obj)
    
for key in data_by_district.keys():
    json_object = {
        "data": data_by_district[key]
    }
   
    with open(f"../district/{key}.json", "w", encoding='utf-8') as outfile:
        json.dump(json_object, outfile, ensure_ascii=False)