import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class AddScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add new polluter',
  });

  render() {
    return (
      <SafeAreaView>
        <Text>Add screen</Text>
      </SafeAreaView>
    );
  }
}
