import * as React from 'react';
import { Right, Button, Text } from 'native-base';
import { BottomTabNavigation } from '../Navigation/BottomTab';

class HomeContainer extends React.Component {
  static router = BottomTabNavigation.router;
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
    return <BottomTabNavigation navigation={this.props.navigation} />;
  }
}

export default HomeContainer;
