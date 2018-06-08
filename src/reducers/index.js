import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';

export default combineReducers({
  firebase,
});
