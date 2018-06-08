import * as React from 'react';
import Map from '../Map';

class HomeScreen extends React.Component {
  render() {
    const { markers } = this.props;

    return <Map markers={markers} />;
  }
}

export default HomeScreen;
