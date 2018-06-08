import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Right, Button, Text } from 'native-base';
import Home from '../../components/Home';

class HomeScreen extends React.Component {
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
    const markers = [
      {
        id: 'marker0',
        title: 'Marker title',
        description: 'Marker description',
        coordinate: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
      },
    ];

    return <Home markers={markers} />;
  }
}

const mapStateToProps = state => ({
  debug: state.firebase.data.debug,
});

const mapDispatchToProps = dispatch => ({
  //…
});

export default compose(
  firebaseConnect(['debug']),
  connect(mapStateToProps, mapDispatchToProps)
)(HomeScreen);
