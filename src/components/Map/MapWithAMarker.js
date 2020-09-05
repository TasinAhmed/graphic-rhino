import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(
  withGoogleMap(({ lat, lng }) => (
    <GoogleMap defaultZoom={17} defaultCenter={{ lat: lat, lng: lng }}>
      <Marker position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  ))
);

export default MapWithAMarker;
