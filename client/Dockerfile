FROM node:lts-alpine


WORKDIR /app/frontend/

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install

COPY . .

EXPOSE 3000

RUN chown -R node /app/frontend/

CMD ["npm", "run", "dev"]
