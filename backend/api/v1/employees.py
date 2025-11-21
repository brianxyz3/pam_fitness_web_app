import json
from fastapi import APIRouter
from models.coach import Coach
from pathlib import Path

router = APIRouter()

coaches_PATH = Path(__file__).resolve().parent.parent.parent / "data" / "coaches.json"

@router.get("/", response_model=list[Coach])
def get_employees():
    with open(coaches_PATH, "r") as f:
        return json.load(f)
    
