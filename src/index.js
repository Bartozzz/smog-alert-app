/**
 * Expo's entry point.
 *
 * @see   https://github.com/react-community/create-react-native-app/issues/152
 * @see   https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/src/bin/crna-entry.js
 */

import * as React from "react";
import Expo from "expo";
import Entry from "./containers/Entry";

// Disables warn boxes on simulators:
console.disableYellowBox = true;

if (process.env.NODE_ENV === "development") {
  Expo.KeepAwake.activate();
}

Expo.registerRootComponent(Entry);
