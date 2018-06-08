import * as React from 'react';
import { MapView } from 'expo';
import { StyleSheet } from 'react-native';

/**
 * Renders a native map with provided markers and default styles.
 *
 * @extends  React.Component
 */
class Map extends React.Component {
  map = null;

  componentDidMount() {
    const { markers } = this.props;

    // Center map on supplied markers. Markers can be recognized based on their
    // identifier, so we need to filter out markers without identifiers:
    if (markers) {
      const identifiers = markers
        .filter(marker => marker.hasOwnProperty('id'))
        .map(marker => marker.id);

      this.map.fitToSuppliedMarkers(identifiers);
    }
  }

  render() {
    const { initialRegion, onMapPress, markers, style } = this.props;

    return (
      <MapView
        ref={map => (this.map = map)}
        style={{ ...StyleSheet.absoluteFillObject, ...style }}
        initialRegion={initialRegion}
        onPress={onMapPress}
        loadingEnabled
        loadingIndicatorColor="#666666"
        loadingBackgroundColor="#eeeeee"
      >
        {markers &&
          markers.map(marker => (
            <MapView.Marker
              key={marker.id}
              identifier={String(marker.id)}
              title={marker.title}
              description={marker.description}
              coordinate={marker.coordinate}
            />
          ))}
      </MapView>
    );
  }
}

export default Map;
