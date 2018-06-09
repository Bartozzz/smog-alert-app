import * as React from 'react';
import Map from '../Map';

class PollutersScreen extends React.Component {
  render() {
    const { markers, center } = this.props;

    return <Map markers={markers} center={center} />;
  }
}

export default PollutersScreen;
