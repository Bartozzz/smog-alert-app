import { eventChannel, buffers } from "redux-saga";
import { take, call, put } from "redux-saga/effects";
import { geofireAddKey, geofireRemoveKey } from "../actions/geofire";
import { addMarker, removeMarker } from "../actions/markers";
import { geoQuery } from "./position";

function subscribe(buffer) {
  return eventChannel(emit => {
    geoQuery.on("key_entered", (key, location, distance) => {
      emit(geofireAddKey(key, location, distance));
      emit(addMarker(key, { location, distance }));
    });

    geoQuery.on("key_exited", key => {
      emit(geofireRemoveKey(key));
      emit(removeMarker(key));
    });

    return () => geoQuery.cancel();
  }, buffer);
}

export function* geofireSaga() {
  const buffer = buffers.expanding();
  const channel = yield call(subscribe, buffer);

  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}
