import React from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BrowseIcon, PostNewIcon } from '~/Icons';
import { BrowseScreen, PostNewScreen } from '~/screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator tabBarOptions={{ style: styles['bg-gray-300'] }}>
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

const styles = StyleSheet.create({
  'bg-gray-300': { backgroundColor: '#e2e8f0' },
});

export default BottomTabNavigator;
