import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
  ListingsScreen,
  LogInScreen,
  RegisterScreen,
  SplashScreen,
  WelcomeScreen,
} from '../screens';

const RootStack = createStackNavigator();
function RootStackNavigator() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <RootStack.Navigator>
      {isAuth ? (
        <>
          <RootStack.Screen
            name="Listings"
            component={ListingsScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <RootStack.Screen name="Welcome" component={WelcomeScreen} />
          <RootStack.Screen name="LogIn" component={LogInScreen} />
          <RootStack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
