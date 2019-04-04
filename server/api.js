import express from "express";

const API = express.Router();

const dataFetcher = require('../common/fetchData.js');

API.get("/reports",  async (req, res) => {
  res.status(200).send(await dataFetcher.fetch311())
});

export default API;
