FROM python:3.9-slim-buster

WORKDIR /app

COPY requirements.txt .     
RUN pip install -r requirements.txt

COPY . .                     

EXPOSE 5000

CMD ["gunicorn", "--bind", ":5000", "api.wsgi:application"]