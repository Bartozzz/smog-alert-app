import { createStore, compose, applyMiddleware } from 'redux';
import { firebaseMiddleware } from './configureFirebase';
import rootReducer from '../reducers';


const createStoreWithFirebase = compose(
  firebaseMiddleware,
)(createStore);

function configureStore(initialState) {
  const store = createStoreWithFirebase(rootReducer, initialState);

  return store;
}

export { configureStore };
