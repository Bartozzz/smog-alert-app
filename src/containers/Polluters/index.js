import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Ionicons } from '@expo/vector-icons';
import Polluters from '../../components/Polluters';

class PollutersScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Polluters',
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name="ios-compass-outline" size={24} color={tintColor} />
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

    return <Polluters markers={markers} />;
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
)(PollutersScreen);
