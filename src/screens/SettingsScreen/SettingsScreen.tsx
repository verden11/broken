import React, { useContext, useCallback, useState } from 'react';
import { View, Button, Text } from 'native-base';
import auth from '@react-native-firebase/auth';

import { AuthContext } from '~/context/AuthContext';
import { Alert } from 'react-native';

const Settings: React.FC = () => {
  const { authContext } = useContext(AuthContext);
 
  return (
    <View>
      <Text>User Settings</Text>
      <Text>Email address: {auth().currentUser?.email}</Text>
      <Text>Name: {auth().currentUser?.displayName}</Text>
      <Text>User ID: {auth().currentUser?.uid}</Text>
      <Button onPress={() => authContext.signOut()}>
        <Text>Logout</Text>
      </Button>
      <Button onPress={() => Alert.alert("password change")}>
        <Text>Change Password</Text>
      </Button>
    </View>
  );
};

export default Settings;
