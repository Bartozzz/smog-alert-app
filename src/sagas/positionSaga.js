import { delay } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import { GEOFIRE_UPDATE_CRITERIA } from '../actions/geofire';
import { geoFire } from '../store/configureGeofire';

export const geoQuery = geoFire.query({
  center: [0, 0],
  radius: 0,
});

function* updateCriteria(action) {
  // Delay criteria update instead of updating it real-time on every map zoom or
  // pinch – that's very expensive:
  yield delay(300);

  geoQuery.updateCriteria({
    center: action.center,
    radius: action.radius,
  });
}

export function* positionSaga() {
  // yield takeEvery(GEOFIRE_UPDATE_CRITERIA, updateCriteria);
  yield takeLatest(GEOFIRE_UPDATE_CRITERIA, updateCriteria);
}
