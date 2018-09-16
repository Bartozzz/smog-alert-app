import * as React from "react";
import * as R from "ramda";
import { VictoryAxis, VictoryArea, VictoryChart } from "victory-native";
import {
  Content,
  Card,
  CardItem,
  Text,
  Tab,
  ScrollableTab,
  Tabs
} from "native-base";

class AirQuality extends React.Component {
  static getMeasurementsByParameter(measurements, parameter) {
    return R.filter(R.propEq("parameter", parameter), measurements);
  }

  static getMeasurementsForLocation(measurements, location) {
    return R.filter(a => R.eqProps("city", a, location), measurements);
  }

  static processMeasurements(measurements) {
    return R.map(measurement => ({
      x: new Date(measurement.date.utc).getTime(),
      y: measurement.value
    }))(measurements);
  }

  renderPanel = (location, parameter) => {
    const { measurements, parameters } = this.props;

    let measure;
    measure = AirQuality.getMeasurementsForLocation(measurements, location);
    measure = AirQuality.getMeasurementsByParameter(measure, parameter.id);
    measure = AirQuality.processMeasurements(measure);
    measure = { ...parameter, data: measure };

    if (measure.data.length === 0) {
      return null;
    }

    return (
      <Card key={location.location}>
        <CardItem header bordered>
          <Text>
            {location.location} ({location.city}, {location.country})
          </Text>
        </CardItem>

        <CardItem cardBody>
          <Content>
            <VictoryChart scale={{ x: "time" }}>
              <VictoryAxis />
              <VictoryAxis
                dependentAxis
                label={`${measure.name} (${measure.preferredUnit})`}
              />

              <VictoryArea
                style={{
                  data: { fill: "black", stroke: "black", fillOpacity: 0.4 }
                }}
                data={measure.data}
              />
            </VictoryChart>
          </Content>
        </CardItem>
      </Card>
    );
  };

  render() {
    const { parameters, locations } = this.props;

    return (
      <Tabs renderTabBar={() => <ScrollableTab />} tabBarPosition="top">
        {R.map(p => (
          <Tab key={p.id} heading={p.name}>
            <Content padder style={{ backgroundColor: "#e9e9ef" }}>
              <Card>
                <CardItem>
                  <Content>
                    <Text>
                      {p.name}: {p.description}
                    </Text>
                  </Content>
                </CardItem>
              </Card>

              {R.map(l => this.renderPanel(l, p))(locations)}
            </Content>
          </Tab>
        ))(parameters)}
      </Tabs>
    );
  }
}

export default AirQuality;
