import { fork, take, call, put } from "redux-saga/effects";
import { createSagaHandler } from "../helpers/saga";
import {
  receiveParameters,
  PARAMETERS_REQUEST,
  PARAMETERS_ENDPOINT
} from "../actions/parameters";

const fetchParameters = createSagaHandler({
  endpoint: PARAMETERS_ENDPOINT,
  callback: receiveParameters
});

export function* parametersSaga() {
  const action = yield take(PARAMETERS_REQUEST);

  // Only needs to be fetched once:
  yield fork(fetchParameters, action);
}
