import * as React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/containers/Home';
import AddScreen from './src/containers/Add';
import App from './src/containers/App';

const Routes = createStackNavigator({
  Home: HomeScreen,
  Add: AddScreen,
});

export default class Entry extends React.Component {
  render() {
    return (
      <App>
        <Routes />
      </App>
    );
  }
}
