import firebase from 'firebase';
import { createStore, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import rootReducer from '../reducers';

import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from 'react-native-dotenv';

firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
});

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, {
    // …
  })
)(createStore);

function configureStore(initialState) {
  return createStoreWithFirebase(rootReducer, initialState);
}

export { configureStore };
