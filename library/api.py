from datetime import datetime
from pathlib import Path

from fastapi import FastAPI

from library.models import Log, State
from library.parse import parse_log, state_from_log


app = FastAPI(title="Fogo.sh Distributed Library", root_path="/api/")

log = parse_log(Path("./log.toml"))
state = state_from_log(log)


@app.get("/")
def read_root():
    return {"fogo-sh-distributed-library": True, "datetime": datetime.now().isoformat()}


@app.get("/log", response_model=Log)
def read_state():
    return log.dict()


@app.get("/state", response_model=State)
def read_state():
    return state.dict()
