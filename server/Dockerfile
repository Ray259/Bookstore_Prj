FROM node:lts-alpine

WORKDIR /app/backendd

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
