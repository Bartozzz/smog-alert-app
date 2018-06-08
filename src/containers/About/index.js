import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'native-base';
import About from '../../components/About';

class AboutScreen extends React.Component {
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

const mapStateToProps = state => ({
  debug: state.firebase.data.debug,
});

const mapDispatchToProps = dispatch => ({
  //…
});

export default compose(
  firebaseConnect(['debug']),
  connect(mapStateToProps, mapDispatchToProps)
)(AboutScreen);
