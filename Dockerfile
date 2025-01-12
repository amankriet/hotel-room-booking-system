FROM node:23.6.0-alpine

WORKDIR /app

COPY . /app

RUN npm install

ARG ENV="dev"
ARG PORT="3001"

ENV DATABASE_URL="mongodb://127.0.0.1:27017/hotel-room-booking-system"
ENV ENV=$ENV

EXPOSE $PORT

CMD ["npm", "start"]