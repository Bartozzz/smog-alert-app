import * as React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Right, Button, Text } from 'native-base';
import { MapView } from 'expo';

export default class HomeScreen extends React.Component {
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
