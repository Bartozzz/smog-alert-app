import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Info from '../../components/Info';

class InfoContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Air quality',
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name="ios-cloud-circle-outline" size={24} color={tintColor} />
    ),
  });

  render() {
    return <Info />;
  }
}

export default InfoContainer;
