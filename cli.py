from pathlib import Path

import typer
from devtools import debug

from library.parse import parse_log

app = typer.Typer()


@app.command()
def cmd_parse_log():
    log_path = Path("./log.toml")
    debug(parse_log(log_path))


if __name__ == "__main__":
    app()
