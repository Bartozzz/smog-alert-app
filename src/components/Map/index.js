import * as React from "react";
import * as R from "ramda";
import { MapView } from "expo";
import { StyleSheet } from "react-native";

/**
 * Renders a native map with provided markers and default styles.
 *
 * @extends  React.Component
 */
class Map extends React.PureComponent {
  map = React.createRef();

  componentDidMount() {
    this.centerMapOnMarkers();
  }

  componentDidUpdate(prevProps) {
    // Recenter map on coords if center property has changed. This will be
    // triggered each time user adds a new polluter on the map:
    if (!R.eqProps("center", prevProps, this.props)) {
      this.centerMapOnCoords();
    }
  }

  centerMapOnCoords() {
    const { center, animated } = this.props;

    // If center is provided, center the map on given coordinates. Center has
    // more importance than markers, as it is used to force center:
    if (R.allPass([R.has("latitude"), R.has("longitude")])(center)) {
      this.map.current.fitToCoordinates([center], {
        animated: animated || false
      });
    }
  }

  centerMapOnMarkers() {
    const { markers, animated } = this.props;

    // Center map on supplied markers. Markers can be recognized based on their
    // identifier, so we need to filter out markers without identifiers:
    if (markers) {
      const identifiers = markers
        .filter(marker => marker.hasOwnProperty("id"))
        .map(marker => marker.id);

      this.map.current.fitToSuppliedMarkers(identifiers, animated || false);
    }
  }

  render() {
    const { markers, style, ...props } = this.props;

    return (
      <MapView
        {...props}
        ref={this.map}
        style={{ ...StyleSheet.absoluteFillObject, ...style }}
        showsUserLocation
        loadingEnabled
        loadingIndicatorColor="#666666"
        loadingBackgroundColor="#eeeeee"
      >
        {markers &&
          markers.map(marker => (
            <MapView.Marker
              {...marker}
              key={marker.id}
              coordinate={marker.location}
              identifier={String(marker.id)}
            />
          ))}
      </MapView>
    );
  }
}

export default Map;
