import * as React from 'react';
import { Image } from 'react-native';
import Map from '../Map';
import CameraRoll from '../CameraRoll';
import {
  Content,
  Card,
  CardItem,
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

class AddScreen extends React.Component {
  state = {
    markers: [],
  };

  handleMapPress = event => {
    this.setState({
      markers: [
        {
          id: `Marker-${Date.now()}`,
          coordinate: event.nativeEvent.coordinate,
        },
      ],
    });
  };

  render() {
    const { markers } = this.state;

    return (
      <Content padder>
        <Form>
          <Card>
            <CardItem header bordered>
              <Text>Basic information</Text>
            </CardItem>

            <CardItem>
              <Content>
                <Item stackedLabel>
                  <Label>Title</Label>

                  <Input placeholder="Will be visible on the map" />
                </Item>
              </Content>
            </CardItem>

            <CardItem>
              <Content>
                <Item stackedLabel>
                  <Label>Description</Label>

                  <Input placeholder="Will be visible on the map" />
                </Item>
              </Content>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text>Incident location</Text>
            </CardItem>

            <CardItem style={{ height: 200 }} cardBody>
              <Map markers={markers} onMapPress={this.handleMapPress} />
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text>Incident proofs</Text>
            </CardItem>

            <CameraRoll aspect={[4, 3]} allowsEditing>
              {({ onPress, image }) => (
                <React.Fragment>
                  <CardItem bordered>
                    <Content>
                      <Button onPress={onPress} full light>
                        <Text>Pick an image from camera roll</Text>
                      </Button>
                    </Content>
                  </CardItem>

                  {image && (
                    <CardItem>
                      <Image
                        source={{ uri: image }}
                        style={{ width: '100%', height: 200 }}
                      />
                    </CardItem>
                  )}
                </React.Fragment>
              )}
            </CameraRoll>
          </Card>

          <Button block style={{ marginTop: 10, marginBottom: 20 }}>
            <Text>Save</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

export default AddScreen;
