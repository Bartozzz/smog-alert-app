import * as React from 'react';
import { Image } from 'react-native';
import { Content, Card, CardItem, Text } from 'native-base';

class InfoScreen extends React.Component {
  render() {
    return (
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>Air quality</Text>
          </CardItem>

          <CardItem>
            <Content>
              <Text>Foo bar</Text>
            </Content>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default InfoScreen;
