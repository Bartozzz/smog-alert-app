import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxLoggerMiddleware from "redux-logger";
import { firebaseMiddleware } from "./configureFirebase";
import rootReducer from "../reducers";
import rootSagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const createStoreWithFirebase = compose(
  firebaseMiddleware,
  applyMiddleware(sagaMiddleware),
  applyMiddleware(reduxLoggerMiddleware)
)(createStore);

function configureStore(initialState) {
  const store = createStoreWithFirebase(rootReducer, initialState);

  // Explicitly reload store
  // @see   https://github.com/reduxjs/react-redux/releases/tag/v2.0.0
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  sagaMiddleware.run(rootSagas);

  return store;
}

export { configureStore };
