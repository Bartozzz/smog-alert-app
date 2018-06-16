import * as R from "ramda";
import { LOCATIONS_REQUEST, LOCATIONS_RECEIVE } from "../actions/locations";

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  json: {}
};

export const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATIONS_REQUEST:
      return R.evolve(R.__, state)({
        fetching: R.always(true),
        fetched: R.always(false)
      });

    case LOCATIONS_RECEIVE:
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
