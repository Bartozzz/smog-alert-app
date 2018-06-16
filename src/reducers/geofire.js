import * as R from "ramda";
import { EARTH_RADIUS_KM } from "../helpers/geospatial";
import {
  GEOFIRE_UPDATE_CRITERIA,
  GEOFIRE_KEY_ENTERED,
  GEOFIRE_KEY_EXITED
} from "../actions/geofire";

const initialState = {
  center: [0, 0],
  radius: EARTH_RADIUS_KM,
  markers: {}
};

export const geofireReducer = (state = initialState, action) => {
  switch (action.type) {
    case GEOFIRE_UPDATE_CRITERIA:
      return R.evolve(R.__, state)({
        center: R.always(action.center),
        radius: R.always(action.radius)
      });

    case GEOFIRE_KEY_ENTERED:
      const marker = {
        id: action.key,
        distance: action.distance,
        coordinate: {
          latitude: action.location[0],
          longitude: action.location[1]
        }
      };

      return R.evolve(R.__, state)({
        markers: R.always(R.assoc(action.key, marker)(state.markers))
      });

    case GEOFIRE_KEY_EXITED:
      return R.evolve(R.__, state)({
        markers: R.always(R.dissoc(action.key, state.markers))
      });

    default:
      return state;
  }
};
