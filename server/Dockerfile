FROM node:lts-alpine

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start:seed"]
