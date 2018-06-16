import { delay } from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { geoFire } from "../store/configureGeofire";
import { GEOFIRE_UPDATE_CRITERIA } from "../actions/geofire";
import { EARTH_RADIUS_KM } from "../helpers/geospatial";

export const geoQuery = geoFire.query({
  center: [0, 0],
  radius: EARTH_RADIUS_KM
});

function* updateCriteria(action) {
  // Delay criteria update instead of updating it real-time on every map zoom or
  // pinch – that's very expensive:
  yield delay(300);

  geoQuery.updateCriteria({
    center: action.center,
    radius: action.radius
  });
}

export function* positionSaga() {
  // yield takeEvery(GEOFIRE_UPDATE_CRITERIA, updateCriteria);
  yield takeLatest(GEOFIRE_UPDATE_CRITERIA, updateCriteria);
}
