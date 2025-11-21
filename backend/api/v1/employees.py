import json
from fastapi import APIRouter
from models.coach import Coach
from models.nutritionist import Nutritionist
from pathlib import Path

router = APIRouter()

coaches_PATH = Path(__file__).resolve().parent.parent.parent / "data" / "coaches.json"
nutritionists_PATH = Path(__file__).resolve().parent.parent.parent / "data" / "nutritionists.json"

@router.get("/")
def get_all_employees():
    with open(coaches_PATH, "r") as f:
        coaches: list[Coach] = json.load(f)
    with open(nutritionists_PATH, "r") as f:
        nutritionist: list[Nutritionist] = json.load(f)
    return {
        "coaches": coaches,
        "nutritioist": nutritionist
    }
