import * as React from "react";
import { Content, Card, CardItem, Text } from "native-base";

const Info = () => (
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

export default Info;
