FROM node:10.9.0-alpine

WORKDIR /usr/src/app

# Install app dependencies (enables caching)
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 5000
EXPOSE 5001
