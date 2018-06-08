import * as React from 'react';
import { Image } from 'react-native';
import { Content, Card, CardItem, Text } from 'native-base';

class AboutScreen extends React.Component {
  render() {
    return (
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>About</Text>
          </CardItem>

          <CardItem>
            <Content>
              <Text>
                We’ve created this application, because we believe that nobody
                should be allowed to burn garbage in their houses – that’s
                dangerous for the environment and everybody’s health.
                {'\n'}
              </Text>

              <Text>
                Burning plastic, rubber or other man-made materials creates
                dioxin and other dangerous toxics in the air, soil &
                groundwater.
                {'\n'}
              </Text>

              <Text>
                This endangers you, your children, your neighbours, your pets,
                birds and fish – with tumours, cancer, learning disorders,
                infertility, immune system problems, asthma, and other diseases.
                {'\n'}
              </Text>

              <Text>
                Children, teenagers & pregnant women are at the highest
                risk. The resulting ash is also toxic and can easily get into
                the ground and your well water.
              </Text>
            </Content>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default AboutScreen;
