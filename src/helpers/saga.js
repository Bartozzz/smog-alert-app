import { call, put } from "redux-saga/effects";
import { query } from "../helpers/query";

export const createSagaHandler = ({ endpoint, callback }) => {
  return function* sagaHandlerFactory(action) {
    try {
      const q = query(action.query);
      const data = yield call(fetch, `${endpoint}${q}`);
      const json = yield data.json();

      yield put(callback(json));
    } catch (error) {
      yield put(callback({}, error.message));
    }
  };
};
