run-api:
    uvicorn library.api:app --reload

create-requirements:
    poetry export -f requirements.txt --output requirements.txt