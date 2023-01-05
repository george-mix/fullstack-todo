FROM node:18-alpine

WORKDIR /app/server

COPY package*.json .

RUN npm ci

COPY . .

CMD [ "npm", "run", "dev"]
