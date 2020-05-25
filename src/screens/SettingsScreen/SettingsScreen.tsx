import React, { useContext } from 'react';
import { View, Button, Text } from 'native-base';

import { AuthContext } from '~/context/AuthContext';

const Settings: React.FC = () => {
  const { authContext } = useContext(AuthContext);
  return (
    <View>
      <Text>User Settings</Text>
      <Button onPress={() => authContext.signOut()}>
        <Text>Logout</Text>
      </Button>
    </View>
  );
};

export default Settings;
