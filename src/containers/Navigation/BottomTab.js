import { createBottomTabNavigator } from 'react-navigation';

import About from '../About';
import Info from '../Info';
import Polluters from '../Polluters';

export const BottomTabNavigation = createBottomTabNavigator({
  Polluters,
  Info,
  About,
});
