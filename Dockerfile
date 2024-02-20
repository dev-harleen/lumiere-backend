FROM node:16

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /usr/src/app

COPY package*.json ./
# Copy .env file into the container
COPY .env ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]