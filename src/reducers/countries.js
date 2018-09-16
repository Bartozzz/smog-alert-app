import * as R from "ramda";
import { COUNTRIES_REQUEST, COUNTRIES_RECEIVE } from "../actions/countries";

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  json: {}
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_REQUEST:
      return R.evolve(R.__, state)({
        fetching: R.T,
        fetched: R.F
      });

    case COUNTRIES_RECEIVE:
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
