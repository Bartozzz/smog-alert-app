import * as React from "react";
import { connect } from "react-redux";
import { StyleSheet, Platform, Image, View } from "react-native";
import {
  AppLoading,
  Asset,
  Font,
  Constants,
  Location,
  Permissions
} from "expo";

import { StackNavigation } from "./Navigation/Stack";
import { requestCountries } from "../actions/countries";
import { requestLocations } from "../actions/locations";
import { requestParameters } from "../actions/parameters";
import { requestSources } from "../actions/sources";

class App extends React.Component {
  state = {
    isReady: false
  };

  componentDidMount() {
    // Fetch basic data:
    // this.props.requestSources();
    // this.props.requestCountries();
    this.props.requestParameters();

    // Fetch nearest locations:
    this.fetchNearestLocations();
  }

  fetchNearestLocations = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status === "granted") {
      const { coords } = await Location.getCurrentPositionAsync();

      this.props.requestLocations({
        limit: 5,
        radius: 500000,
        order_by: "distance",
        coordinates: `${coords.latitude},${coords.longitude}`
      });
    }
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
      if (typeof image === "string") {
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
    if (Platform.OS === "android") {
      fonts.push({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
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
      <View style={styles.container}>
        <StackNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(null, {
  requestCountries,
  requestLocations,
  requestParameters,
  requestSources
})(App);
