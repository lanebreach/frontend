import express from "express";
import axios from "axios"

const API = express.Router();

API.get("/reports",  async (req, res) => {
  const base_url = 'https://data.sfgov.org/resource/ktji-gk7t.json'
  const url_filters = [['service_subtype', 'Blocking_Bicycle_Lane']]
  var url = base_url;
  for (var i = 0; i < url_filters.length; i++) {
    var sep = '&';
    if (i == 0) { sep = '?' }
    url += sep + url_filters[i][0] + '=' + url_filters[i][1];
  }
  const { data: bikeLaneReports } = await axios.get(url);
  const formattedData = {
    "type": "FeatureCollection",
    "features": bikeLaneReports.map((report, i) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: report.point.coordinates,
      },
      properties: {
        title: `Point${i}`,
        icon: "harbor",
        color: "#FFFFFF"
      }
    }))
  };
  res.status(200).send(formattedData)
});

export default API;