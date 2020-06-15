import React, { useContext } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon, Text, View } from 'native-base';
import { toggleDrawer } from '../../RootNavigation';
import { AuthContext } from '~/context/AuthContext';
import auth from '@react-native-firebase/auth';
import {
  BrowseScreen,
  LogInScreen,
  RegisterScreen,
  SettingsScreen,
  SplashScreen,
  WelcomeScreen,
  MyItems,
} from '~/screens';

import BottomTabNavigator from '~/navigation/BottomTabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  const { isLoading, isAuth } = useContext(AuthContext);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {auth().currentUser ? (
          <Text>user ID: {auth().currentUser?.uid}</Text>
        ) : (
          <Text>No user found</Text>
        )}
        {isAuth ? (
          <Icon name="menu" onPress={toggleDrawer} />
        ) : (
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Text>Sig in</Text>
            <Icon name="login" type="AntDesign" onPress={toggleDrawer} />
          </View>
        )}
      </View>
      <Drawer.Navigator drawerPosition="right">
        {isAuth ? (
          <>
            <Drawer.Screen
              name="BottomTabNavigator"
              component={BottomTabNavigator}
              options={{ title: 'Listings' }}
            />
            <Drawer.Screen name="MyItems" component={MyItems} options={{ title: 'My Items' }} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
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
