import * as React from 'react';
import Map from '../Map';

class PollutersScreen extends React.Component {
  render() {
    const { markers, center, onRegionChange } = this.props;

    return (
      <Map
        markers={markers}
        center={center}
        onRegionChange={onRegionChange}
        toolbarEnabled={false}
        showsUserLocation
      />
    );
  }
}

export default PollutersScreen;
