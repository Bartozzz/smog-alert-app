import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'native-base';
import Info from '../../components/Info';

class InfoScreen extends React.Component {
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

const mapStateToProps = state => ({
  debug: state.firebase.data.debug,
});

const mapDispatchToProps = dispatch => ({
  //…
});

export default compose(
  firebaseConnect(['debug']),
  connect(mapStateToProps, mapDispatchToProps)
)(InfoScreen);
