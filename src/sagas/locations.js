import { fork, take, call, put } from "redux-saga/effects";
import { geofireAddKey } from "../actions/geofire";
import { query } from "../helpers/query";
import { addMarkers } from "../actions/markers";
import {
  receiveLocations,
  LOCATIONS_REQUEST,
  LOCATIONS_ENDPOINT
} from "../actions/locations";

function* fetchLocations(action) {
  try {
    const q = query(action.query);
    const data = yield call(fetch, `${LOCATIONS_ENDPOINT}${q}`);
    const json = yield data.json();

    yield put(receiveLocations(json));
    // yield put(addMarkers(json.results));
  } catch (error) {
    yield put(receiveLocations(null, error.message));
  }
}

export function* locationsSaga() {
  const action = yield take(LOCATIONS_REQUEST);

  // Only needs to be fetched once:
  yield fork(fetchLocations, action);
}
