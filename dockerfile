ARG NODE_VERSION=18.0.0

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app
EXPOSE 3000
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm start