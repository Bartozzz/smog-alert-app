import * as R from 'ramda';
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Ionicons } from '@expo/vector-icons';
import Polluters from '../../components/Polluters';
import { hav } from '../../helpers/geospatial';
import { geofireUpdateCriteria } from '../../actions/geofire';

class PollutersContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Polluters',
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name="ios-compass-outline" size={24} color={tintColor} />
    ),
  });

  onRegionChange = region => {
    let a, b;

    // We need 2 points to update criteria (radius):
    if (region.latitudeDelta > region.longitudeDelta) {
      a = { ...region, latitude: region.latitude - region.latitudeDelta };
      b = { ...region, latitude: region.latitude + region.latitudeDelta };
    } else {
      a = { ...region, longitude: region.longitude - region.longitudeDelta };
      b = { ...region, longitude: region.longitude + region.longitudeDelta };
    }

    const center = [region.latitude, region.longitude];
    const radius = hav(a, b);

    this.props.updateCriteria(center, radius);
  };

  render() {
    const { navigation, markers } = this.props;

    // Center param is provided once a new polluter has been added by the user.
    // It forces map to center on the added polluter (success fallback):
    const center = navigation.getParam('center');

    const points = R.values(markers);

    return (
      <Polluters
        markers={points}
        center={center}
        onRegionChange={this.onRegionChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  markers: state.geofire.markers,
});

const mapDispatchToProps = dispatch => ({
  updateCriteria: (center, radius) =>
    dispatch(geofireUpdateCriteria(center, radius)),
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(PollutersContainer);
