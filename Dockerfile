FROM node:12
WORKDIR /usr/app
RUN npm install -g sequelize-cli
COPY package.json .
RUN yarn install
COPY . .
