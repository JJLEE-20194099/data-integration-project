import os
from dotenv import load_dotenv
load_dotenv()
class Config:
    API_KEY_GOOGLE = os.getenv('API_KEY_GOOGLE')
    ENV_MODE = 'dev'
    DEBUG = False
    
class DevelopmentConfig(Config):
    DEBUG = True

class TestingConfig(Config):
    DEBUG = True
    TESTING = True
    
class ProductionConfig(Config):
    DEBUG = False
    
config_by_name = dict(
    dev=DevelopmentConfig,
    test=TestingConfig,
    prod=ProductionConfig
)
