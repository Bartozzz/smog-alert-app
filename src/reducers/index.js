import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import { polluterReducer as polluter } from './polluter';

export default combineReducers({
  polluter,
  firebase,
  form,
});
