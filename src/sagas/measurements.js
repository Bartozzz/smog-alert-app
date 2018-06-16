import { takeLatest, call, put } from "redux-saga/effects";
import { query } from "../helpers/query";

import {
  receiveMeasurements,
  MEASUREMENTS_REQUEST,
  MEASUREMENTS_ENDPOINT
} from "../actions/measurements";

function* fetchMeasurements(action) {
  try {
    const q = query(action.query);
    const data = yield call(fetch, `${MEASUREMENTS_ENDPOINT}${q}`);
    const json = yield data.json();

    yield put(receiveMeasurements(json));
  } catch (error) {
    yield put(receiveMeasurements(null, error.message));
  }
}

export function* measurementsSaga() {
  yield takeLatest(MEASUREMENTS_REQUEST, fetchMeasurements);
}
