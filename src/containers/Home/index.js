import * as React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Add')}
        color="#037aff"
        title="Add"
        buttonStyle={{
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        }}
      />
    ),
  });

  render() {
    return (
      <SafeAreaView>
        <Text>Home screen</Text>
      </SafeAreaView>
    );
  }
}
