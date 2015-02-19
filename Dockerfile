FROM node:0.10.36

ADD . /opt/flight-deck
WORKDIR /opt/flight-deck
RUN curl https://install.meteor.com/ | sh
RUN meteor build --directory dist
RUN cd dist/bundle/programs/server && npm install

ENV PORT 3000
ENV ROOT_URL http://flyghtdeck.com
ENV MONGO_URL mongodb://db:27017/test

EXPOSE 3000

WORKDIR /opt/flight-deck/dist/bundle
CMD ["/usr/local/bin/node", "/opt/flight-deck/dist/bundle/main.js"]
