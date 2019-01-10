FROM node:10.9.0-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies (enables caching)
COPY package.json yarn.lock /usr/src/app/
RUN yarn install --pure-lockfile
COPY . .

# Include environment variables at build-time
RUN cp /usr/src/app/.aptible.env /usr/src/app/.env

# Ensure we're in production mode
ENV NODE_ENV=production

# Copy over code
COPY . /usr/src/app/

# Run production build
RUN yarn prod:build

# Create volume for static files
RUN mkdir -p /usr/src/app/public
VOLUME /usr/src/app/public

EXPOSE 5000

CMD [ "yarn", "prod:run" ]
