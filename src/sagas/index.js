import { all } from "redux-saga/effects";
import { citiesSaga } from "./cities";
import { countriesSaga } from "./countries";
import { geofireSaga } from "./geofire";
import { locationsSaga } from "./locations";
import { measurementsSaga } from "./measurements";
import { parametersSaga } from "./parameters";
import { positionSaga } from "./position";
import { sourcesSaga } from "./sources";

/**
 * `getFirebase` is a function populated from the store which gives direct
 * access to a Firebase instance.
 *
 * @see     http://react-redux-firebase.com/docs/integrations/redux-saga.html
 * @param   {Firebase}  getFirebase
 */
export default function* sagas(getFirebase) {
  yield all([
    citiesSaga(),
    countriesSaga(),
    geofireSaga(getFirebase),
    locationsSaga(),
    measurementsSaga(),
    parametersSaga(),
    positionSaga(),
    sourcesSaga()
  ]);
}
