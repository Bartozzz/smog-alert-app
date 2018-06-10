import { eventChannel, buffers } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import { geofireAddKey, geofireRemoveKey } from '../actions/geofire';
import { geoQuery } from './positionSaga';

function subscribe(buffer) {
  return eventChannel(emit => {
    geoQuery.on('key_entered', (key, location, distance) => {
      return emit(geofireAddKey(key, location, distance));
    });

    geoQuery.on('key_exited', key => {
      return emit(geofireRemoveKey(key));
    });

    return () => {
      geoQuery.cancel();
    };
  }, buffer);
}

export function* markersSaga() {
  const buffer = buffers.expanding();
  const channel = yield call(subscribe, buffer);

  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}
