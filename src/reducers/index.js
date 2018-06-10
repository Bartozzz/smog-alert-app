import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import { polluterReducer as polluter } from './polluter';
import { geofireReducer as geofire } from './geofire';

export default combineReducers({
  polluter,
  firebase,
  geofire,
  form,
});
