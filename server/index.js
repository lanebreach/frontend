import express from "express";
import path from "path";
import bodyParser from "body-parser";
import helmet from "helmet";
import api from "./api";

const PORTS = { SERVER: 4999, APP: 5000 };

const startApp = async () => {
  let app = express();
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, "../../public")));
  app.use("/api", api);
  app.listen(PORTS.SERVER, "0.0.0.0", err => {
    if (err) throw err;
    console.log(`Server running on: localhost:${PORTS.SERVER}`);
  });
};

startApp();
