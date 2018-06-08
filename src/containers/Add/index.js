import * as React from 'react';
import { Image } from 'react-native';
import { Permissions, ImagePicker, MapView } from 'expo';
import {
  Content,
  Card,
  CardItem,
  Button,
  Text,
  Toast,
  Body,
  Form,
  Item,
  Input,
  Label,
  View,
} from 'native-base';

export default class AddScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add new polluter',
  });

  state = {
    image: null,
    error: null,
  };

  requestPermissions = () => {
    return Permissions.askAsync(Permissions.CAMERA_ROLL).catch(error => {
      Toast.show({
        text: 'Permissions not granted',
        buttonText: 'Okay',
      });
    });
  };

  pickImage = () => {
    this.requestPermissions().then(({ status }) => {
      ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      })
        .then(result => {
          if (!result.cancelled) {
            this.setState({ image: result.uri });
          }
        })
        .catch(error => {
          Toast.show({
            text: 'Something went wrong',
            buttonText: 'Okay',
          });
        });
    });
  };

  render() {
    const { image } = this.state;

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
              <MapView
                style={{ width: '100%', height: '100%' }}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              />
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text>Incident proofs</Text>
            </CardItem>

            <CardItem bordered>
              <Content>
                <Button onPress={this.pickImage} full light>
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
          </Card>

          <Button block style={{ marginTop: 10, marginBottom: 20 }}>
            <Text>Save</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}
