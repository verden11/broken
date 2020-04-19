import { Button, Text, View } from 'native-base';
import React from 'react';
import { Props } from './WelcomeScreen.interface';
import { StyleSheet } from 'react-native';

const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.center}>
        Welcome to <Text style={styles.underline}>Broken</Text>
      </Text>
      <View>
        <Button onPress={() => navigate('LogIn')}>
          <Text>Go Login</Text>
        </Button>
        <Button onPress={() => navigate('Register')}>
          <Text>Go Register</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  center: { alignSelf: 'center' },
  underline: { textDecorationLine: 'underline' },
});

export default WelcomeScreen;
