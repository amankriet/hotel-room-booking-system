FROM node:23.6.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG ENV="dev"
ARG PORT="3001"

ENV ENV=$ENV

EXPOSE $PORT

CMD ["npm", "start"]