import React from "react";
import ReactDOM from "react-dom";
import IncidentPopup from "./IncidentPopup";
import axios from "axios"

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
    const { data: bikeLaneReports } = await axios.get("/api/v1/reports")
    await this.setState({bike_lane_reports: bikeLaneReports})
    this.initializeMap();
  }

  componentWillUnmount() {
    this.map.remove();
  }

  initializeMap() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWdhZXNzZXIiLCJhIjoiY2pvZGY5bmh4MWJtcTNsbWtmN2RmNnhiNCJ9.iwOotv1u0S92o-Vj2CCjag";

    this.map = new mapboxgl.Map({
      container: kMapId,
      style: "mapbox://styles/agaesser/cjn5lb26b0gty2rnr3laj0ljd",
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

    this.map.on("click", "bike-lane-reports-point", e =>
      this.addPopup(e.features[0]),
    );
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
      "id": "points",
      "type": "heatmap",
      "source": "sf311",
      "paint": {
        "heatmap-radius": [
          "interpolate",
          ["linear"],
          ["zoom"],
          0, 2,
          9, 6
        ], 
      }
    });
      
    map_style.layers = map_style.layers.filter(layer => {
      if(layer.id == "bike-lane-reports")         return false;
      if(layer.id == "bike-lane-reports-point")   return false;
      if(layer.id == "bike-lane-reports-heat")    return false;
      if(layer.id == "bike-injdeath-with-coords") return false;
      if(layer.id == "bike-injdeath-derived")     return false;
      return true;
    });

    return map_style;
  }

  addPopup(incident) {
    const { coordinates }  = incident.geometry;
    const placeholder = document.createElement("div");
    ReactDOM.render(<IncidentPopup {...incident.properties} />, placeholder);
    new mapboxgl.Popup()
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
