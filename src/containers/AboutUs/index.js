import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import AboutUs from "../../components/AboutUs";

class AboutUsContainer extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "About us",
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name="ios-help-circle-outline" size={24} color={tintColor} />
    )
  });

  render() {
    return <AboutUs />;
  }
}

export default AboutUsContainer;
