FROM node:lts-alpine


WORKDIR /app/backend/

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install

COPY . .

EXPOSE 8080

RUN chown -R node /app/backend/

CMD ["npm", "start"]
