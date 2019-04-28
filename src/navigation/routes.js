import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import MapScreen from '../screens/map.screen';

const TabNavigator = createBottomTabNavigator({
  Home: MapScreen,
});

export default createAppContainer(TabNavigator);
