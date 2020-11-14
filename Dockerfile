FROM node:10-alpine

ENV PROJECT_ENV production

ENV NODE_ENV production

WORKDIR /code
ADD . /code
RUN npm install && npm run server
EXPOSE 3010