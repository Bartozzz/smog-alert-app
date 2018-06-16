import { take, call, put } from "redux-saga/effects";
import { query } from "../helpers/query";

import {
  receiveParameters,
  PARAMETERS_REQUEST,
  PARAMETERS_ENDPOINT
} from "../actions/parameters";

function* fetchParameters(action) {
  try {
    const q = query(action.query);
    const data = yield call(fetch, `${PARAMETERS_ENDPOINT}${q}`);
    const json = yield data.json();

    yield put(receiveParameters(json));
  } catch (error) {
    yield put(receiveParameters(null, error.message));
  }
}

export function* parametersSaga() {
  // Only needs to be fetched once:
  yield take(PARAMETERS_REQUEST, fetchParameters);
}
