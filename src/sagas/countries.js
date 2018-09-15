import { fork, take, call, put } from "redux-saga/effects";
import { createSagaHandler } from "../helpers/saga";
import {
  receiveCountries,
  COUNTRIES_REQUEST,
  COUNTRIES_ENDPOINT
} from "../actions/countries";

const fetchCountries = createSagaHandler({
  endpoint: COUNTRIES_ENDPOINT,
  callback: receiveCountries
});

export function* countriesSaga() {
  const action = yield take(COUNTRIES_REQUEST);

  // Only needs to be fetched once:
  yield fork(fetchCountries, action);
}
