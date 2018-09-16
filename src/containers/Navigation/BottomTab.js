import { createBottomTabNavigator } from "react-navigation";
import About from "../About";
import AirQuality from "../AirQuality";
import Polluters from "../Polluters";

export const BottomTabNavigation = createBottomTabNavigator({
  Polluters,
  AirQuality,
  About
});
