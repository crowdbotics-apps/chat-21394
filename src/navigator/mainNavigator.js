import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps138634Navigator from '../features/Maps138634/navigator';
import Add-Item138633Navigator from '../features/Add-Item138633/navigator';
import Maps138629Navigator from '../features/Maps138629/navigator';
import UserProfile138625Navigator from '../features/UserProfile138625/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps138634: { screen: Maps138634Navigator },
Add-Item138633: { screen: Add-Item138633Navigator },
Maps138629: { screen: Maps138629Navigator },
UserProfile138625: { screen: UserProfile138625Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
