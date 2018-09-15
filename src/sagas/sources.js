import { fork, take, call, put } from "redux-saga/effects";
import { createSagaHandler } from "../helpers/saga";
import {
  receiveSources,
  SOURCES_REQUEST,
  SOURCES_ENDPOINT
} from "../actions/sources";

const fetchSources = createSagaHandler({
  endpoint: SOURCES_ENDPOINT,
  callback: receiveSources
});

export function* sourcesSaga() {
  const action = yield take(SOURCES_REQUEST);

  // Only needs to be fetched once:
  yield fork(fetchSources, action);
}
