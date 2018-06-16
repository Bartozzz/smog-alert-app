import { all } from "redux-saga/effects";
import { citiesSaga } from "./cities";
import { countriesSaga } from "./countries";
import { geofireSaga } from "./geofire";
import { locationsSaga } from "./locations";
import { measurementsSaga } from "./measurements";
import { parametersSaga } from "./parameters";
import { positionSaga } from "./position";
import { sourcesSaga } from "./sources";

export default function* sagas() {
  yield all([
    citiesSaga(),
    countriesSaga(),
    geofireSaga(),
    locationsSaga(),
    measurementsSaga(),
    parametersSaga(),
    positionSaga(),
    sourcesSaga()
  ]);
}
