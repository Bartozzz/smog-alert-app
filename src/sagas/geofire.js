import { eventChannel, buffers } from "redux-saga";
import { take, call, put } from "redux-saga/effects";
import { geofireAddKey, geofireRemoveKey } from "../actions/geofire";
import { addMarker, removeMarker } from "../actions/markers";
import { geoQuery } from "./position";

const subscribe = getFirebase => buffer =>
  eventChannel(emit => {
    geoQuery.on("key_entered", (key, location, distance) => {
      // Fetch full polluter data for a given marker. Polluter & marker share
      // the same key in real-time database, so we can be sure both exist:
      getFirebase()
        .database()
        .ref(`/polluter/${key}`)
        .once("value")
        .then(snapshot => {
          emit(geofireAddKey(key, location, distance));
          emit(addMarker(key, { ...snapshot.val(), location, distance }));
        });
    });

    geoQuery.on("key_exited", key => {
      emit(geofireRemoveKey(key));
      emit(removeMarker(key));
    });

    return () => geoQuery.cancel();
  }, buffer);

export function* geofireSaga(getFirebase) {
  const buffer = buffers.expanding();
  const channel = yield call(subscribe(getFirebase), buffer);

  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}
