import * as R from "ramda";

import {
  MEASUREMENTS_REQUEST,
  MEASUREMENTS_RECEIVE
} from "../actions/measurements";

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  json: {}
};

export const measurementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEASUREMENTS_REQUEST:
      return R.evolve(R.__, state)({
        fetching: R.always(true),
        fetched: R.always(false)
      });

    case MEASUREMENTS_RECEIVE:
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
