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
        fetching: R.always(true),
        fetched: R.always(false)
      });

    case SOURCES_RECEIVE:
      return R.evolve(R.__, state)({
        fetching: R.always(false),
        fetched: R.always(true),
        error: R.always(action.error),
        json: R.always(action.json)
      });

    default:
      return state;
  }
};
