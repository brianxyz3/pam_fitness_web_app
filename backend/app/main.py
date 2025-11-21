from fastapi import FastAPI
from api.v1 import employees, plans

app = FastAPI(
    title="Gym Web App API",
    version="1.0.0",
    description="Backend API for gym coaches, nutritionists, and workout plans."
)

# Include Routers
app.include_router(employees.router, prefix="/api/employees", tags=["Employees"])
app.include_router(plans.router, prefix="/api/plans", tags=["Plans"])


@app.get("/", tags=["Health"])
def root():
    return {"message": "Pam fitness API is running!"}
