import * as React from "react";
import { Provider } from 'react-redux';
import { configureStore } from '../store/configureStore';
import App from "./App";

const store = configureStore({});

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
