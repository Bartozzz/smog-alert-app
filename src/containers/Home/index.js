import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Right, Button, Text } from 'native-base';

import PollutersScreen from '../Polluters';
import AboutScreen from '../About';
import InfoScreen from '../Info';

const BottomNav = createBottomTabNavigator({
  Polluters: PollutersScreen,
  Info: InfoScreen,
  About: AboutScreen,
});

class HomeScreen extends React.Component {
  static router = BottomNav.router;
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: (
      <Right>
        <Button onPress={() => navigation.navigate('Add')} hasText transparent>
          <Text>Add</Text>
        </Button>
      </Right>
    ),
  });

  render() {
    return <BottomNav navigation={this.props.navigation} />;
  }
}

export default HomeScreen;
