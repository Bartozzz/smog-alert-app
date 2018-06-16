import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { firebaseReducer as firebase } from "react-redux-firebase";
import { citiesReducer as cities } from "./cities";
import { countriesReducer as countries } from "./countries";
import { geofireReducer as geofire } from "./geofire";
import { locationsReducer as locations } from "./locations";
import { measurementsReducer as measurements } from "./measurements";
import { parametersReducer as parameters } from "./parameters";
import { polluterReducer as polluter } from "./polluter";
import { sourcesReducer as sources } from "./sources";

export default combineReducers({
  firebase,
  geofire,
  form,

  cities,
  countries,
  geofire,
  locations,
  measurements,
  parameters,
  polluter,
  sources
});
