import { take, call, put } from "redux-saga/effects";
import { query } from "../helpers/query";

import {
  receiveSources,
  SOURCES_REQUEST,
  SOURCES_ENDPOINT
} from "../actions/sources";

function* fetchSources(action) {
  try {
    const q = query(action.query);
    const data = yield call(fetch, `${SOURCES_ENDPOINT}${q}`);
    const json = yield data.json();

    yield put(receiveSources(json));
  } catch (error) {
    yield put(receiveSources(null, error.message));
  }
}

export function* sourcesSaga() {
  // Only needs to be fetched once:
  yield take(SOURCES_REQUEST, fetchSources);
}
