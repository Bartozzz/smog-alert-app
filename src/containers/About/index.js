import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import About from '../../components/About';

class AboutContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'About us',
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name="ios-help-circle-outline" size={24} color={tintColor} />
    ),
  });

  render() {
    return <About />;
  }
}

export default AboutContainer;
