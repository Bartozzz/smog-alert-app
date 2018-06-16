import { createStackNavigator } from "react-navigation";

import Home from "../Home";
import Polluter from "../Polluter";

export const StackNavigation = createStackNavigator({
  Home,
  Polluter
});
