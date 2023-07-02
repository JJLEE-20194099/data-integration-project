from pydantic import BaseModel, validator
import json
from typing import List
from app.modules.nlp.service import preprocess_text
from app.utils.constant import FilePath
from app.models.location_model import GeolocationModel

class StreetInfoModel(BaseModel):
    city: str
    district: str
    ward: str
    street: str
    geolocation: GeolocationModel

    @validator('district')
    def c_match(cls, v):
        district_obj = json.load(
            open(FilePath.DISTRICT_DESC, encoding='utf-8'))
        district_list = district_obj["district_list"]
        if not preprocess_text(v) in district_list:
            raise ValueError(f'c must be in {district_list}')
        return v


class StreetInfoModelList(BaseModel):
    data: List[StreetInfoModel]
