FROM node:18
WORKDIR /app

COPY ./src/ ./src/
COPY ./package*.json .
RUN npm install

EXPOSE 8080

CMD [ "node", "src/index.js" ]
