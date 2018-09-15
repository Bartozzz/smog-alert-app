import { takeLatest } from "redux-saga/effects";
import { createSagaHandler } from "../helpers/saga";
import {
  receiveCities,
  CITIES_REQUEST,
  CITIES_ENDPOINT
} from "../actions/cities";

const fetchCities = createSagaHandler({
  endpoint: CITIES_ENDPOINT,
  callback: receiveCities
});

export function* citiesSaga() {
  yield takeLatest(CITIES_REQUEST, fetchCities);
}
