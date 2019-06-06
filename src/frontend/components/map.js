import React from "react";
import ReactDOM from "react-dom";
import IncidentPopup from "./IncidentPopup";
import axios from "axios"

const dataFetcher = require('../common/fetchData.js');

const kMapId = 'mapbox-map';
const kMinZoom = 11;

const kMaxBounds = new mapboxgl.LngLatBounds(
  new mapboxgl.LngLat(-122.63, 37.65),
  new mapboxgl.LngLat(-122.28, 37.9)
);

export default class Map extends React.Component {
  constructor () {
    super();
    this.state = {
      bike_lane_reports: []
    };
  }

  componentDidMount = async () => {
    // fetch the data from a local api to avoid CORS
    var bikeLaneReports = await dataFetcher.fetch311();

    //attach month as an explicit property to filter against
    bikeLaneReports.features = bikeLaneReports.features.map(function(d) {
      d.properties.month = new Date(d.properties.time).getMonth();
      return d;
    })

    await this.setState({bike_lane_reports: bikeLaneReports})
    this.initializeMap();
  }


  //month is an Integer
  filterBy(month){
    var filters = ['==', 'month', month];
    this.map.setFilter("reports-points", filters);
    this.map.setFilter('reports-heatmap', filters);
  }

  initializeMap() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWdhZXNzZXIiLCJhIjoiY2pvZGY5bmh4MWJtcTNsbWtmN2RmNnhiNCJ9.iwOotv1u0S92o-Vj2CCjag";

    this.map = new mapboxgl.Map({
      container: kMapId,
      style: "mapbox://styles/agaesser/cjuzybtpj45g71fqx19n42i0j",
      center: [-122.450577, 37.759108], // starting position [lng, lat]
      zoom: kMinZoom,
      minZoom: kMinZoom,
      maxBounds: kMaxBounds
    });



    this.map.on("load", () => {
      const map_style = this.buildMapStyle();
      this.map.setStyle(map_style);
    });

    this.map.on(
      "mouseenter",
      "bike-lane-reports-point",
      () => this.map.getCanvas().style.cursor = "pointer"
    );

    this.map.on(
      "mouseleave",
      "bike-lane-reports-point",
      () => (this.map.getCanvas().style.cursor = ""),
    );

    this.map.on("click", "reports-points", e => {
      if (this.map.getZoom() < 14) {
        return;
      }

      this.addPopup(e.features[0])
    });

    // this.map.on("style.load", e => {
    //   this.filterBy(0)
    // })

  }

  buildMapStyle() {
    var map_style = this.map.getStyle();
    map_style.sources.sf311 = {
      "type": "geojson",
      "data": this.state.bike_lane_reports
    };

    // Uncomment to make data underneath other data.
    // map_style.layers.unshift({

    map_style.layers.push({
      "id": "reports-heatmap",
      "type": "heatmap",
      "source": "sf311",
      "paint": {
        "heatmap-radius": 6,
        "heatmap-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13, 1,
          15, 0
        ],
      }
    });

    map_style.layers.push({
      "id": "reports-points",
      "type": "circle",
      "source": "sf311",
      "paint": {
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14, 2,
          16, 5
        ],
        "circle-color": "white",
        "circle-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14, 0,
          15, 1
        ],
      }
    });

    return map_style;
  }

  addPopup(incident) {
    const { coordinates }  = incident.geometry;
    const placeholder = document.createElement("div");
    ReactDOM.render(<IncidentPopup {...incident.properties} />, placeholder);

    const popup_options = {
      closeButton: false,
      closeOnClick: true,
    };

    new mapboxgl.Popup(popup_options)
      .setDOMContent(placeholder)
      .setLngLat(coordinates)
      .addTo(this.map);
  }

  render() {
    const style = {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
    };

    return <div style={style} id={kMapId} />;
  }
}
