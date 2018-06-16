import { take, call, put } from "redux-saga/effects";
import { query } from "../helpers/query";

import {
  receiveCountries,
  COUNTRIES_REQUEST,
  COUNTRIES_ENDPOINT
} from "../actions/countries";

function* fetchCountries(action) {
  try {
    const q = query(action.query);
    const data = yield call(fetch, `${COUNTRIES_ENDPOINT}${q}`);
    const json = yield data.json();

    yield put(receiveCountries(json));
  } catch (error) {
    yield put(receiveCountries(null, error.message));
  }
}

export function* countriesSaga() {
  // Only needs to be fetched once:
  yield take(COUNTRIES_REQUEST, fetchCountries);
}
