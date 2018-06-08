import * as React from 'react';
import { Permissions, ImagePicker } from 'expo';
import { Toast } from 'native-base';

/**
 * A HOC which requests permissions to open camera roll and pick a photo if
 * permissions were granted.
 *
 * @extends  React.Component
 */
class CameraRoll extends React.Component {
  state = {
    image: null,
  };

  /**
   * We need extra permissions to open camera roll. We can ask for those perms
   * only one – when users needs to upload a photo.
   *
   * @return  {Promise}
   * @access  private
   */
  requestPermissions = () => {
    return Permissions.askAsync(Permissions.CAMERA_ROLL).catch(error => {
      Toast.show({
        text: 'Permissions not granted',
        buttonText: 'Okay',
      });
    });
  };

  /**
   * Requests required permissions and allows user to pick a photo from camera
   * roll if permissions were granted.
   *
   * @return  {void}
   * @access  private
   */
  requestImage = async () => {
    const { status } = await this.requestPermissions();
    const { children, ...rest } = this.props;

    try {
      const result = await ImagePicker.launchImageLibraryAsync(rest);

      if (!result.cancelled) {
        this.setState({
          image: result.uri,
        });
      }
    } catch (error) {
      Toast.show({
        text: 'Something went wrong',
        buttonText: 'Okay',
      });
    }
  };

  render() {
    const { children } = this.props;
    const { image } = this.state;

    return children({
      onPress: this.requestImage,
      image: image,
    });
  }
}

export default CameraRoll;
