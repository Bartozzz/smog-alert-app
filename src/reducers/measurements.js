import * as R from "ramda";

import {
  MEASUREMENTS_REQUEST,
  MEASUREMENTS_RECEIVE
} from "../actions/measurements";

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  data: []
};

export const measurementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEASUREMENTS_REQUEST:
      return R.evolve(R.__, state)({
        fetching: R.T,
        fetched: R.F
      });

    case MEASUREMENTS_RECEIVE:
      return R.evolve(R.__, state)({
        fetching: R.F,
        fetched: R.T,
        error: R.always(action.error),
        data: R.concat(action.json.results)
      });

    default:
      return state;
  }
};
