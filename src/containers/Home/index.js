import * as React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import { MapView } from 'expo';

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
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapView.Marker
          title="Marker title"
          description="Marker description"
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        />
      </MapView>
    );
  }
}
