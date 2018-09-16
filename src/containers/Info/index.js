import * as React from "react";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import Info from "../../components/Info";
import Loading from "../../components/Loading";

class InfoContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Air quality",
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name="ios-cloud-circle-outline" size={24} color={tintColor} />
    )
  });

  render() {
    const { locations, measurements, parameters } = this.props;

    if (!locations.fetched || !measurements.fetched || !parameters.fetched) {
      return <Loading />;
    }

    return (
      <Info
        locations={locations.data}
        parameters={parameters.data}
        measurements={measurements.data}
      />
    );
  }
}

const mapStateToProps = state => ({
  locations: state.locations,
  parameters: state.parameters,
  measurements: state.measurements
});

const mapDispatchToProps = dispatch => ({
  // …
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);
