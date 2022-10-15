from pathlib import Path

import toml

from library.models import Log


def parse_log(log_path: Path) -> Log:
    return Log(**toml.loads(log_path.read_text()))
