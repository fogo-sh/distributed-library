from pathlib import Path

import typer
from devtools import debug

import library

app = typer.Typer()


@app.command()
def parse_log():
    log_path = Path("./log.toml")
    debug(library.parse.parse_log(log_path))


@app.command()
def state_from_log():
    log_path = Path("./log.toml")
    log = library.parse.parse_log(log_path)
    debug(library.parse.state_from_log(log))


if __name__ == "__main__":
    app()
