FROM python:3.9-slim-buster

WORKDIR /app

# Copia apenas o requirements.txt da pasta backend
COPY backend/requirements.txt .

RUN pip install -r requirements.txt

# Copia tudo que está dentro da pasta backend/
COPY backend/ .

EXPOSE 5000

CMD ["gunicorn", "--bind", ":5000", "petshop.wsgi:application"]
