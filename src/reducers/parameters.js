import * as R from "ramda";
import { PARAMETERS_REQUEST, PARAMETERS_RECEIVE } from "../actions/parameters";

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  data: []
};

export const parametersReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARAMETERS_REQUEST:
      return R.evolve(R.__, state)({
        fetching: R.always(true),
        fetched: R.always(false)
      });

    case PARAMETERS_RECEIVE:
      return R.evolve(R.__, state)({
        fetching: R.always(false),
        fetched: R.always(true),
        error: R.always(action.error),
        data: R.always(action.json.results)
      });

    default:
      return state;
  }
};
