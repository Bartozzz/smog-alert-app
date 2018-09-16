import * as R from "ramda";
import * as RA from "ramda-adjunct";
import { EARTH_RADIUS_KM } from "../helpers/geospatial";

import {
  GEOFIRE_UPDATE_CRITERIA,
  GEOFIRE_KEY_ENTERED,
  GEOFIRE_KEY_EXITED
} from "../actions/geofire";

import {
  MARKERS_ADD_SINGLE,
  MARKERS_ADD_BULK,
  MARKERS_REMOVE_SINGLE,
  MARKERS_REMOVE_BULK
} from "../actions/markers";

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

    case MARKERS_ADD_SINGLE:
      // Assuming we are adding single markers from Geofire:
      const marker = R.pipe(
        // Normalize location:
        R.evolve({ location: R.zipObj(["latitude", "longitude"]) }),
        // Use action key as default id:
        R.over(R.lensProp("id"), R.defaultTo(action.key))
      )(action.data);

      return R.evolve(R.__, state)({
        markers: R.assoc(action.key, marker)
      });

    case MARKERS_ADD_BULK:
      // Assuming we are adding bulk markers from OpenAQ's `/locations`:
      const normalizeKeys = RA.renameKeys({
        location: "id",
        coordinates: "location"
      });

      const markers = R.pipe(
        R.filter(R.has("coordinates")),
        // Normalize each marker keys:
        R.map(normalizeKeys),
        // Transform array to object by id:
        R.indexBy(R.prop("id"))
      )(action.bulk);

      return R.evolve(R.__, state)({
        markers: R.merge(markers)
      });

    case MARKERS_REMOVE_SINGLE:
      return R.evolve(R.__, state)({
        markers: R.dissoc(action.key)
      });

    case MARKERS_REMOVE_BULK:
      return R.evolve(R.__, state)({
        markers: R.omit(action.keys)
      });

    default:
      return state;
  }
};
