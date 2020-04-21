import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { SettingsScreen } from '../screens';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ title: 'Listings' }}
      />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
