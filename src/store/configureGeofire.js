import GeoFire from "geofire";
import { firebase } from "./configureFirebase";

// Create a Firebase reference where GeoFire will store its information:
const markers = firebase.database().ref("marker");

// Create a GeoFire index:
const geoFire = new GeoFire(markers);

export { geoFire };
