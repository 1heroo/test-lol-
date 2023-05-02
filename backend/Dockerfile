FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 11

WORKDIR /code

ADD . /code

COPY ./requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

CMD ['sh', 'code/postgres_config.sh']
COPY . /