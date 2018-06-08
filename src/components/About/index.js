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
              <Text>Goo</Text>
            </Content>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default AboutScreen;
