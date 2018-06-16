import { takeLatest, call, put } from "redux-saga/effects";
import { query } from "../helpers/query";

import {
  receiveCities,
  CITIES_REQUEST,
  CITIES_ENDPOINT
} from "../actions/cities";

function* fetchCities(action) {
  try {
    const q = query(action.query);
    const data = yield call(fetch, `${CITIES_ENDPOINT}${q}`);
    const json = yield data.json();

    yield put(receiveCities(json));
  } catch (error) {
    yield put(receiveCities(null, error.message));
  }
}

export function* citiesSaga() {
  yield takeLatest(CITIES_REQUEST, fetchCities);
}
