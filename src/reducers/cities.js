import * as R from "ramda";
import { CITIES_REQUEST, CITIES_RECEIVE } from "../actions/cities";

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  json: {}
};

export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CITIES_REQUEST:
      return R.evolve(R.__, state)({
        fetching: R.T,
        fetched: R.F
      });

    case CITIES_RECEIVE:
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
