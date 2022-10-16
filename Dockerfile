FROM python:3.10
WORKDIR /code
COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
COPY ./library /code/library
COPY ./log.toml /code/log.toml
CMD ["uvicorn", "library.api:app", "--host", "0.0.0.0", "--port", "80"]
