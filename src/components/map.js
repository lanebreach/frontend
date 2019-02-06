import React from "react";
import ReactDOM from "react-dom";
import IncidentPopup from "./IncidentPopup";

const kMapId = 'mapbox-map';

export default class Map extends React.Component {
  componentDidMount() {
    this.initializeMap()
  }

  componentWillUnmount() {
    this.map.remove();
  }

  initializeMap(){
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWdhZXNzZXIiLCJhIjoiY2pvZGY5bmh4MWJtcTNsbWtmN2RmNnhiNCJ9.iwOotv1u0S92o-Vj2CCjag";

    this.map = new mapboxgl.Map({
      container: kMapId,
      style: "mapbox://styles/agaesser/cjn5lb26b0gty2rnr3laj0ljd", // stylesheet location
      center: [-122.450577, 37.759108], // starting position [lng, lat]
      zoom: 12, // starting zoom
    });

    this.map.on(
      "mouseenter",
      "bike-lane-reports-point",
      () => (this.map.getCanvas().style.cursor = "pointer"),
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
