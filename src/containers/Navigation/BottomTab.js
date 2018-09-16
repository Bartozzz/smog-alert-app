import { createBottomTabNavigator } from "react-navigation";
import AboutUs from "../AboutUs";
import AirQuality from "../AirQuality";
import Polluters from "../Polluters";

export const BottomTabNavigation = createBottomTabNavigator({
  Polluters,
  AirQuality,
  AboutUs
});
