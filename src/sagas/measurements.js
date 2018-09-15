import { takeLatest, call, put } from "redux-saga/effects";
import { createSagaHandler } from "../helpers/saga";
import {
  receiveMeasurements,
  MEASUREMENTS_REQUEST,
  MEASUREMENTS_ENDPOINT
} from "../actions/measurements";

const fetchMeasurements = createSagaHandler({
  endpoint: MEASUREMENTS_ENDPOINT,
  callback: receiveMeasurements
});

export function* measurementsSaga() {
  yield takeLatest(MEASUREMENTS_REQUEST, fetchMeasurements);
}
