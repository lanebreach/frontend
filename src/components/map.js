import React from "react";
import ReactDOM from "react-dom";
import IncidentPopup from "./IncidentPopup";

const kMapId = 'mapbox-map';
const kMinZoom = 11;

const kMaxBounds = new mapboxgl.LngLatBounds(
  new mapboxgl.LngLat(-122.63, 37.65),
  new mapboxgl.LngLat(-122.28, 37.9)
);

function geoJSONFromBikeData(data) {
  var result = {
    "type": "FeatureCollection",
    "features": []
  };

  for (var i = 0; i < data.length; ++i) {
    var feature = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [data[i].point.longitude, data[i].point.latitude]
      },
      "properties": {
        "title": "Point" + i,
        "icon": "harbor",
        "color": "#FFFFFF"
      }
    };
    result.features.push(feature)
  }

  console.log(result);

  return result;
};

export default class Map extends React.Component {
  constructor () {
    super();
    this.state = {
      bike_lane_reports: []
    };
  }
  
  componentDidMount() {
    const base_url = 'https://data.sfgov.org/resource/ihm3-5gmc.json'
    const url_filters = [['service_subtype', 'Blocking_Bicycle_Lane']]

    var url = base_url;
    for (var i = 0; i < url_filters.length; i++) {
      var sep = '&';
      if (i == 0) { sep = '?' }
      url += sep + url_filters[i][0] + '=' + url_filters[i][1];
    }
    
    fetch(url).then(results => { return results.json() }).then(data => {
      this.initializeMap(data)
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  initializeMap(bike_lane_data) {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWdhZXNzZXIiLCJhIjoiY2pvZGY5bmh4MWJtcTNsbWtmN2RmNnhiNCJ9.iwOotv1u0S92o-Vj2CCjag";

    this.map = new mapboxgl.Map({
      container: kMapId,
      // stylesheet location
      style: "mapbox://styles/agaesser/cjn5lb26b0gty2rnr3laj0ljd",

      // starting position [lng, lat]
      center: [-122.450577, 37.759108],

      // Start all the way zoomed out.
      zoom: kMinZoom,
      minZoom: kMinZoom,
      maxBounds: kMaxBounds
    });

    this.map.on("load", () => {
      this.map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": geoJSONFromBikeData(bike_lane_data)
        },
        "layout": {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top",
        },
        "paint": {
          "text-color": ['get', 'color']
        }
      });
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
