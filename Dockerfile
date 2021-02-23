FROM node:14.15.5-alpine3.11

ENV APP_DIR=/home/portfolio
COPY . $APP_DIR
WORKDIR /home/portfolio

RUN npm install

CMD ["npm", "run", "start"]
