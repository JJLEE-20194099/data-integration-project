from pydantic import BaseModel
from typing import Dict, Optional

class FacilityModel(BaseModel):
    facilityCount: Dict

class FacilityModelV2(BaseModel):
    type: str
    lat: float
    lon: float
    distance: float
    name: Optional[str]
