from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str = "sqlite:///./test.db"
    environment: str = "development"
    debug: bool = True

    class Config:
        env_file = ".env"

settings = Settings()
