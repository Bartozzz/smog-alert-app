import { createStackNavigator } from "react-navigation";
import AddPolluter from "../AddPolluter";
import Home from "../Home";

export const StackNavigation = createStackNavigator({
  Home,
  AddPolluter
});
