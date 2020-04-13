import auth from '@react-native-firebase/auth';
import { Button, Input, Item, Label, Text } from 'native-base';
import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Props } from './RegisterScreen.interface';

function RegisterScreen({ navigation: { navigate } }: Props) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<Error | null>(null);

  const register = useCallback(() => {
    if (email && password) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          setError(null);
          navigate('Welcome');
        })
        .catch(setError);
    }
  }, [email, password, navigate]);

  return (
    <>
      <Item style={styles.m5}>
        <Label>Email</Label>
        <Input value={email} onChangeText={(text: string) => setEmail(text)} />
      </Item>
      <Item style={styles.m5}>
        <Label>Password</Label>
        <Input
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry
        />
      </Item>
      <Button block primary onPress={register} style={styles.m5}>
        <Text>Register</Text>
      </Button>
      {error && <Text>Error: {error.message}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  p10: { padding: 10 },
  m5: { margin: 5 },
});

export default RegisterScreen;
