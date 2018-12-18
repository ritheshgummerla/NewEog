import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";

const MapWithAMarker = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC3Y88mbMIsf4idhcqDCRAwMW17wb5mUcw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={4} defaultCenter={props.data}>
    <Marker position={props.data} />
  </GoogleMap>
));

class Map extends Component {
  render() {
    return (
      <div>
        <MapWithAMarker data={this.props.data} />
      </div>
    );
  }
}

export default Map;
