from pydantic import BaseModel, validator
from app.utils.enum import AdministrativeGenre
import json
from typing import List, Optional
from app.modules.nlp.service import preprocess_text
from app.utils.constant import FilePath

class LocationModel(BaseModel):
    lat: float = 21.021439
    lon: float = 105.816182
    district: str = 'ba đình'
    street: Optional[str] = ""
    title: Optional[str] = ""
    administrative_genre: AdministrativeGenre = 'quận'
    detailed_address: str = 'Phường Thành Công, Ba Đình, Hà Nội'

    class Config:
        use_enum_values = True

    @validator('district')
    def c_match(cls, v):
        district_obj = json.load(
            open(FilePath.DISTRICT_DESC, encoding='utf-8'))
        district_list = district_obj["district_list"]
        if not preprocess_text(v) in district_list:
            raise ValueError(f'c must be in {district_list}')
        return v


class GeolocationModel(BaseModel):
    latitude: float
    longitude: float

class DistrictUnitModel(BaseModel):
    name: str
    geolocationList: List[GeolocationModel]

class DistrictModel(BaseModel):
    name: str
    unitList: List[DistrictUnitModel]

class RegionModel(BaseModel):
    data: Optional[List[DistrictModel]]