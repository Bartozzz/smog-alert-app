import * as React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { polluterAddProof, polluterAddMarker } from "../../actions/polluter";
import { geoFire } from "../../store/configureGeofire";
import AddPolluter from "../../components/AddPolluter";

class AddPolluterContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Add new polluter"
  });

  onSubmit = async values => {
    const { firebase, image, coordinate, navigation, resetMarker } = this.props;

    try {
      const photoData = await fetch(image.uri);
      const photoBlob = await photoData.blob();
      let photoDownloadUrl = null;

      const database = firebase.database();
      const polluter = database.ref("polluter").push();

      if (image.uri) {
        // NOTE: sometimes it fails with response "Entity too large". Not sure
        //       ATM if it is a limitation of React Native, device API or
        //       Firebase.
        const photo = await firebase.uploadFile("proofs", photoBlob, null, {
          name: polluter.key
        });

        photoDownloadUrl = await photo.uploadTaskSnapshot.ref.getDownloadURL();
      }

      await polluter.set({
        title: values.title,
        photo: photoDownloadUrl,
        description: values.description
      });

      // NOTE: GeoFire's marker & polluter record must share the same key/id in
      //       order to retrieve complete data later.
      await geoFire.set(polluter.key, [
        coordinate.latitude,
        coordinate.longitude
      ]);

      navigation.navigate("Polluters", {
        center: coordinate
      });
    } catch (error) {
      // TODO(Bartozzz): proper error handling:
      console.log("Error", error);
    }

    resetMarker();
  };

  render() {
    const { onProofSelect, onMarkerSelect, coordinate } = this.props;

    return (
      <AddPolluter
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
  coordinate: state.polluter.coordinate
});

const mapDispatchToProps = dispatch => ({
  onProofSelect: image => dispatch(polluterAddProof(image)),
  onMarkerSelect: coords => dispatch(polluterAddMarker(coords)),
  resetMarker: () => {
    dispatch(polluterAddProof({}));
    dispatch(polluterAddMarker({ latitude: 0, longitude: 0 }));
  }
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(AddPolluterContainer);
