from pydantic import BaseModel

class Nutritionist(BaseModel):
    id: int
    name: str
    certification: str
    experience_years: int
