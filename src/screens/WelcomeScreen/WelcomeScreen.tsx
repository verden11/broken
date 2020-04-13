import React from 'react';
import { View, Text, Button } from 'native-base';

import { Props } from './WelcomeScreen.interface';

function WelcomeScreen({ navigation: { navigate } }: Props) {
  return (
    <View>
      <Text>Welcome Screen</Text>
      <Button onPress={() => navigate('LogIn')}>
        <Text>Go Login</Text>
      </Button>
      <Button onPress={() => navigate('Register')}>
        <Text>Go Register</Text>
      </Button>
    </View>
  );
}

export default WelcomeScreen;
