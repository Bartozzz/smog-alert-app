import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxLoggerMiddleware from "redux-logger";
import { firebaseMiddleware } from "./configureFirebase";
import rootReducer from "../reducers";
import rootSagas from "../sagas";

function configureStore(initialState) {
  const middlewares = [];
  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(firebaseMiddleware);
  middlewares.push(applyMiddleware(sagaMiddleware));

  if (process.env.NODE_ENV === "development") {
    middlewares.push(applyMiddleware(reduxLoggerMiddleware));
  }

  const enhancer = compose(...middlewares);
  const store = createStore(rootReducer, initialState, enhancer);

  // Run the saga:
  sagaMiddleware.run(rootSagas);

  // Explicitly reloads store. Enables Webpack hot module replacement.
  // @see   https://github.com/reduxjs/react-redux/releases/tag/v2.0.0
  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export { configureStore };
