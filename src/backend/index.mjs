import express from "express";
import bodyParser from "body-parser";
import api from "./api";

// set up application config and middle ware
var app = express();
app.use(bodyParser.json());

// mount all the /api endpoints at this route
app.use("/v1", api);


// listen on the configured port
console.log(process.env)
const PORT = process.env.PORT
if(!process.env.PORT) {
  const errMsg = "PORT environment variable is not defined"
  console.error(errMsg)
  throw new Error(errMsg)
}
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})