import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LogInScreen, RegisterScreen, WelcomeScreen, ListingsScreen } from '../screens';

const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName={'Welcome'}>
      <RootStack.Screen name="Welcome" component={WelcomeScreen} />
      <RootStack.Screen name="LogIn" component={LogInScreen} />
      <RootStack.Screen name="Register" component={RegisterScreen} />
      <RootStack.Screen name="Listings" component={ListingsScreen} />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
