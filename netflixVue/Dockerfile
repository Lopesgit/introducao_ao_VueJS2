FROM node:lts-slim

LABEL maintainer="Renê Lopes"

RUN usermod -aG staff node
RUN npm install -g vue-cli json-server

EXPOSE 8080
EXPOSE 3000