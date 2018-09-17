import * as React from "react";
import * as R from "ramda";
import { MapView } from "expo";
import { Text, Thumbnail } from "native-base";
import { View, StyleSheet } from "react-native";

/**
 * Renders a native map with provided markers, callouts and default styles.
 * Automatically handles forced map centering (when providing new `center`
 * property) and centering on `markers` (on initial render).
 *
 * @extends  React.PureComponent
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

    // If center is provided, center the map on given coordinates. Note that
    // `centerMapOnCoords` has more importance than `centerMapOnMarkers`:
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

  renderCallout(marker) {
    if (!marker.title || !marker.description || !marker.photo) {
      return null;
    }

    return (
      <MapView.Callout
        style={{
          maxWidth: 160,
          maxHeight: 330
        }}
      >
        <View>
          {marker.photo && (
            <Thumbnail
              square
              large
              source={{ uri: marker.photo }}
              style={{ alignSelf: "center" }}
            />
          )}

          {marker.title && (
            <Text
              style={{
                fontWeight: "700",
                marginTop: 5,
                marginBottom: 5,
                textAlign: "center"
              }}
            >
              {marker.title}
            </Text>
          )}

          {marker.description && (
            <Text style={{ fontWeight: "400" }}>{marker.description}</Text>
          )}
        </View>
      </MapView.Callout>
    );
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
            >
              {this.renderCallout(marker)}
            </MapView.Marker>
          ))}
      </MapView>
    );
  }
}

export default Map;
