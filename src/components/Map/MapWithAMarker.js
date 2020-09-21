import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const defaultMapOptions = {
  disableDefaultUI: true,
};

const MapWithAMarker = withScriptjs(
  withGoogleMap(({ lat, lng }) => (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: lat, lng: lng }}
      defaultOptions={defaultMapOptions}
    >
      <Marker position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  ))
);

export default MapWithAMarker;
