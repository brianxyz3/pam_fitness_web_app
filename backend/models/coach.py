from pydantic import BaseModel

class Coach(BaseModel):
    id: int
    name: str
    specialty: str
    experience_years: int
