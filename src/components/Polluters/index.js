import * as React from 'react';
import Map from '../Map';

class PollutersScreen extends React.Component {
  render() {
    const { markers } = this.props;

    return <Map markers={markers} />;
  }
}

export default PollutersScreen;
