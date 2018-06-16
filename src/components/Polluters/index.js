import * as React from "react";
import Map from "../Map";

const Polluters = ({ markers, center, onRegionChange }) => (
  <Map
    markers={markers}
    center={center}
    onRegionChange={onRegionChange}
    toolbarEnabled={false}
    showsUserLocation
  />
);

export default Polluters;
