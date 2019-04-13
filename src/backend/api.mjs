import express from "express";

const API = express.Router();

import {fetch311} from "./common/fetchData";

API.get("/reports",  async (req, res) => {
  res.status(200).send(await fetch311())
});

export default API;