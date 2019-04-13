import express from "express";
var app = express();

import proxy from 'express-http-proxy';

app.use(express.static('/frontend/dist/'))

console.log(process.env)

// proxy all /api routes to the REST API Server
const LANEBREACH_API_ADDR = process.env.LANEBREACH_API_ADDR
const BACKEND_URI = `http://${LANEBREACH_API_ADDR}/api`
if(!process.env.LANEBREACH_API_ADDR) {
    const errMsg = "LANEBREACH_API_ADDR environment variable is not defined"
    console.error(errMsg)
    throw new Error(errMsg)
  }
app.use('/api', proxy(LANEBREACH_API_ADDR))

// listen on the configured port
const PORT = process.env.PORT;
if(!process.env.PORT) {
  const errMsg = "PORT environment variable is not defined"
  console.error(errMsg)
  throw new Error(errMsg)
}
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})