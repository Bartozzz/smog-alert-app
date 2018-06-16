import { take, call, put } from "redux-saga/effects";
import { geofireAddKey } from "../actions/geofire";
import { query } from "../helpers/query";

import {
  receiveLocations,
  LOCATIONS_REQUEST,
  LOCATIONS_ENDPOINT
} from "../actions/locations";

function* addLocationMarker(location) {
  const { city, coordinates } = location;

  if (location.coordinates) {
    // yield put(geofireAddKey({
    //   key: city,
    //   location: [
    //     coordinates.latitude,
    //     coordinates.longitude
    //   ],
    //   distance: 0,
    //   kind: MARKER_MEASUREMENT
    // }));
  }
}

function* fetchLocations(action) {
  try {
    const q = query(action.query);
    const data = yield call(fetch, `${LOCATIONS_ENDPOINT}${q}`);
    const json = yield data.json();

    yield put(receiveLocations(json));

    // if (json.results) {
    //   for (const location of json.results) {
    //     yield addLocationMarker(location);
    //   }
    // }
  } catch (error) {
    yield put(receiveLocations(null, error.message));
  }
}

export function* locationsSaga() {
  // Only needs to be fetched once:
  yield take(LOCATIONS_REQUEST, fetchLocations);
}
