import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BrowseScreen, PostNewScreen } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Browse" component={BrowseScreen} />
      <Tab.Screen name="Post" component={PostNewScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
