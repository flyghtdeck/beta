FROM node:latest

RUN curl https://install.meteor.com/ | sh

ADD . /opt/flight-deck
WORKDIR /opt/flight-deck

EXPOSE 3000
CMD ["meteor"]
