import GeoFire from 'geofire';
import { firebase } from './configureFirebase';

// Create a Firebase reference where GeoFire will store its information:
const markers = firebase.database().ref('marker');

// Create a GeoFire index
const geofire = new GeoFire(markers);

export { geofire, geofireSaga };
