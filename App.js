import * as React from 'react';
import { Provider } from 'react-redux';
import { Platform, Image } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { createStackNavigator } from 'react-navigation';
import { configureStore } from './src/store/configureStore';

import HomeScreen from './src/containers/Home';
import AddScreen from './src/containers/Polluter';
import App from './src/containers/App';

const Routes = createStackNavigator({
  Home: HomeScreen,
  Add: AddScreen,
});

const store = configureStore({
  // …
});

export default class Entry extends React.Component {
  state = {
    isReady: false,
  };

  /**
   * Preloads and caches images from module or URI.
   *
   * @return  {Array<Promise>}
   * @access  private
   */
  cacheImages() {
    const images = [];

    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  /**
   * Preloads and caches fonts from module or URI.
   *
   * @return  {Array<Promise>}
   * @access  private
   */
  cacheFonts() {
    const fonts = [];

    // Fonts required by Native Base on Android:
    if (Platform.OS === 'android') {
      fonts.push({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }

    return fonts.map(font => Font.loadAsync(font));
  }

  /**
   * Preloads and caches all required resources.
   *
   * @return  {Promise}
   * @access  private
   */
  cacheResources = async () => {
    const imageAssets = this.cacheImages();
    const fontAssets = this.cacheFonts();

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.cacheResources}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <App>
          <Routes />
        </App>
      </Provider>
    );
  }
}
