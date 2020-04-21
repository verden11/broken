import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BrowseScreen, PostNewScreen } from '../screens';
import { BrowseIcon, PostNewIcon } from '../Icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Browse"
        component={BrowseScreen}
        options={{ tabBarIcon: () => <BrowseIcon /> }}
      />
      <Tab.Screen
        name="Post"
        component={PostNewScreen}
        options={{ tabBarIcon: () => <PostNewIcon /> }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
