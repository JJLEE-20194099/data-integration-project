from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi
from app.utils.constant import FilePath

def create_app(config_name):
    app = FastAPI(
        docs_url='/api/v2/docs',
        redoc_url = '/api/v2/redocs',
        title="Price Prediction Module",
        description="New Framework for Python",
        version="2.0",
        openapi_url=FilePath.OPENAPI_PATH
    )
    return app

