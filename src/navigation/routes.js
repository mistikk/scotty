import {
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import MapScreen from '../screens/map.screen';
import BookmarkScreen from '../screens/bookmarks.screen';


const TabNavigator = createBottomTabNavigator({
  Home: MapScreen,
  Bookmarks: BookmarkScreen,
});

export default createAppContainer(TabNavigator);
