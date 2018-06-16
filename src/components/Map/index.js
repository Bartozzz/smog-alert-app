import * as React from "react";
import { MapView } from "expo";
import { StyleSheet } from "react-native";
import { shallowEqual, arraysEqual } from "../../helpers/objects";

/**
 * Renders a native map with provided markers and default styles.
 *
 * @extends  React.Component
 */
class Map extends React.PureComponent {
  map = null;

  componentDidMount() {
    this.centerMapOnMarkers();
  }

  componentDidUpdate(prevProps) {
    const newProps = this.props;

    // if (!shallowEqual(prevProps, this.props))

    // Recenter map on coords if center property has changed. This will be
    // triggered each time user adds a new polluter on the map:
    if (!arraysEqual(prevProps.center, newProps.center)) {
      this.centerMapOnCoords();
    }
  }

  centerMapOnCoords() {
    const { center, animated } = this.props;

    // If center is provided, center the map on given coordinates. Center has
    // more importance than markers, as it is used to force center:
    if (center && "latitude" in center && "longitude" in center) {
      this.map.fitToCoordinates([center], {
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

      this.map.fitToSuppliedMarkers(identifiers, animated || false);
    }
  }

  render() {
    const { markers, style, ...props } = this.props;

    return (
      <MapView
        {...props}
        ref={map => (this.map = map)}
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
              identifier={String(marker.id)}
            />
          ))}
      </MapView>
    );
  }
}

export default Map;
