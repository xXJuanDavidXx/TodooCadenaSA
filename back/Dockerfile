FROM python:3.13-alpine3.23


WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app 



CMD ["uvicorn", "app:asgi_app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
