# Use base node 8 image from Docker hub
FROM node:8
ENV LANEBREACH_API_ADDR='lanebreach.org'
ENV PORT=3000
WORKDIR /frontend

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the application source code
COPY . .

RUN npm run-script build

# Run app.js with debugging port when container launches
#ENTRYPOINT ["node", "--inspect=9229", "app.js"]

# Comment above and uncomment below to run app.js without debugger port when container launches
ENTRYPOINT ["node", "--experimental-modules", "dist/server.mjs"]
EXPOSE 3000