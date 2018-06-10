import { all } from 'redux-saga/effects';
import { positionSaga } from './positionSaga';
import { markersSaga } from './markersSaga';

export default function* sagas() {
  yield all([positionSaga(), markersSaga()]);
}
