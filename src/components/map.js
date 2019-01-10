import React from "react";

export default class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWdhZXNzZXIiLCJhIjoiY2pvZGY5bmh4MWJtcTNsbWtmN2RmNnhiNCJ9.iwOotv1u0S92o-Vj2CCjag";

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/agaesser/cjn5lb26b0gty2rnr3laj0ljd", // stylesheet location
      center: [-122.450577, 37.759108], // starting position [lng, lat]
      zoom: 11, // starting zoom
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "100%",
    };

    return <div style={style} ref={el => (this.mapContainer = el)} />;
  }
}
