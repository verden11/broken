import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'native-base';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LogInScreen, RegisterScreen, SplashScreen, WelcomeScreen } from '../screens';
import DrawerNavigation from './DrawerNavigation';

const RootStack = createStackNavigator();
function RootStackNavigator() {
  const { isAuth, isLoading, authContext, user } = useContext(AuthContext);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <RootStack.Navigator>
      {isAuth ? (
        <>
          <RootStack.Screen
            name="DrawerNavigation"
            component={DrawerNavigation}
            options={{
              headerRight: () => <Icon name="ios-log-out" onPress={authContext.signOut} />,
              title: `Welcome ${user?.email}`,
            }}
          />
        </>
      ) : (
        <>
          <RootStack.Screen name="Welcome" component={WelcomeScreen} />
          <RootStack.Screen name="LogIn" component={LogInScreen} options={{ title: 'Log in' }} />
          <RootStack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
