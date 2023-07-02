from enum import Enum


class AdministrativeGenre(Enum):
    BigDistrict = 'quận'
    SmallDistrict = 'huyện'
    Town = 'thị xã'

class RealEstateLevel(Enum):
    street = 'street'
    ward = 'ward'
    district = 'district'

