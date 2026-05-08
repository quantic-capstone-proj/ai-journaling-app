from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    database_url: str = "sqlite:///./test.db"
    environment: str = "development"
    debug: bool = True
    allowed_origins: List[str] = ["http://localhost:5173"]

    class Config:
        env_file = ".env"

settings = Settings()
