from pydantic import BaseModel, validator
import json
from typing import List, Optional
from app.modules.nlp.service import preprocess_text
from app.utils.constant import FilePath
from app.models.location_model import GeolocationModel
from app.models.facility_model import FacilityModelV2

class RealEstateModel(BaseModel):
    ward: Optional[str]
    district: str
    street: Optional[str]
    addressDetails: Optional[str]
    city: Optional[str]
    country: Optional[str]
    geolocation: GeolocationModel
    frontWidth: float
    houseDirection: Optional[str]
    landSize: float
    accessibility: Optional[str]
    numberOfBedRooms: Optional[float]
    numberOfFloors: Optional[float]
    numberOfBathRooms: Optional[float]

    @validator('district')
    def c_match(cls, v):
        district_obj = json.load(
            open(FilePath.DISTRICT_DESC, encoding='utf-8'))
        district_list = district_obj["district_list"]
        if not preprocess_text(v) in district_list:
            raise ValueError(f'c must be in {district_list}')
        return v


class RealEstateModelList(BaseModel):
    data: List[RealEstateModel]


class RealEstateWithFacilityModelList(RealEstateModelList):
    facilityList: List[List[FacilityModelV2]] = [[]]
