import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { polluterAddProof, polluterAddMarker } from '../../actions/polluter';
import { geoFire } from '../../store/configureGeofire';
import Polluter from '../../components/Polluter';

class PolluterContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add new polluter',
  });

  onSubmit = async values => {
    const { firebase, image, coordinate, navigation, resetMarker } = this.props;

    try {
      const database = firebase.database();
      const polluter = database.ref('polluter').push();

      await polluter.set({
        title: values.title,
        description: values.description,
      });

      await geoFire.set(polluter.key, [
        coordinate.latitude,
        coordinate.longitude,
      ]);

      navigation.navigate('Polluters', {
        center: coordinate,
      });

      resetMarker();
    } catch (error) {
      console.log('Error', error);
    }
  };

  render() {
    const { onProofSelect, onMarkerSelect, coordinate } = this.props;

    return (
      <Polluter
        marker={coordinate}
        onSubmit={this.onSubmit}
        onProofSelect={onProofSelect}
        onMarkerSelect={onMarkerSelect}
      />
    );
  }
}

const mapStateToProps = state => ({
  image: state.polluter.image,
  coordinate: state.polluter.coordinate,
});

const mapDispatchToProps = dispatch => ({
  onProofSelect: image => dispatch(polluterAddProof(image)),
  onMarkerSelect: coords => dispatch(polluterAddMarker(coords)),
  resetMarker: () => dispatch(polluterAddMarker({ latitude: 0, longitude: 0 })),
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(PolluterContainer);
