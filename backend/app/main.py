from fastapi import FastAPI
from api.v1 import employees, plans
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="Gym Web App API",
    version="1.0.0",
    description="Backend API for gym coaches, nutritionists, and workout plans."
)

# frontend allowed origin url
# origins = [
#     "http://localhost:3000",
#     "http://127.0.0.1:3000"
# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], #allow all url origins
    # allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(employees.router, prefix="/api/employees", tags=["Employees"])
app.include_router(plans.router, prefix="/api/plans", tags=["Plans"])


@app.get("/", tags=["Health"])
def root():
    return {"message": "Pam fitness API is running!"}
