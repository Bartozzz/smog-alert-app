import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import Add from '../../components/Add';

class AddScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add new polluter',
  });

  render() {
    return <Add />;
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
)(AddScreen);
