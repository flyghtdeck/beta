FROM node:latest

RUN npm install -g meteor

ADD . /opt/flight-deck
WORKDIR /opt/flight-deck

CMD ["meteor"]
