FROM python:3.9-slim-buster

COPY . .

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["gunicorn", "--bind", ":5000", "api.wsgi:application"]