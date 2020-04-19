import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { ListingsScreen } from '../screens';
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
      <Drawer.Screen name="ListingsScreen" component={ListingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
