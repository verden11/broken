import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
  LogInScreen,
  RegisterScreen,
  SettingsScreen,
  SplashScreen,
  WelcomeScreen,
  BrowseScreen,
} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import { toggleDrawer } from '../../RootNavigation';
import { Button, Text } from 'native-base';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  const { isLoading, isAuth } = useContext(AuthContext);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Button onPress={toggleDrawer} style={{ justifyContent: 'space-between' }}>
        <Text>Broken(app name)</Text>
        <Text>Toggle</Text>
      </Button>
      <Drawer.Navigator drawerPosition="right">
        {isAuth ? (
          <>
            <Drawer.Screen
              name="BottomTabNavigator"
              component={BottomTabNavigator}
              options={{ title: 'Listings' }}
            />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            {/* @TODO logout button */}
          </>
        ) : (
          <>
            <Drawer.Screen name="Browse" component={BrowseScreen} />
            <Drawer.Screen name="LogIn" component={LogInScreen} options={{ title: 'Log in' }} />
            <Drawer.Screen name="Register" component={RegisterScreen} />
          </>
        )}

        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      </Drawer.Navigator>
    </>
  );
}

export default DrawerNavigation;
