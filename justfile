run-api:
    uvicorn library.api:app --reload

run-frontend:
    cd ./frontend && npm run dev

create-requirements:
    poetry export -f requirements.txt --output requirements.txt
