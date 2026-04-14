from fastapi import FastAPI

app = FastAPI()

origins = [ "http://localhost:3000", ]

app.add_middleware(
    CORSMiddleware,
    alloe_origins=origins,
    allow_credentials=True,
    alloe_methods=["*"],
    allow_headers=["*"],
)

app.get("/")
def root():
    return {"message": "Api is up and running"}