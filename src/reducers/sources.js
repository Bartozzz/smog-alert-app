import * as R from "ramda";
import { SOURCES_REQUEST, SOURCES_RECEIVE } from "../actions/sources";

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  json: {}
};

export const sourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOURCES_REQUEST:
      return R.evolve(R.__, state)({
        fetching: R.T,
        fetched: R.F
      });

    case SOURCES_RECEIVE:
      return R.evolve(R.__, state)({
        fetching: R.F,
        fetched: R.T,
        error: R.always(action.error),
        json: R.always(action.json)
      });

    default:
      return state;
  }
};
