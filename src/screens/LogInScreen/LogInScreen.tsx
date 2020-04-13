import auth from '@react-native-firebase/auth';
import { Button, Input, Item, Label, Spinner, Text } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { IUser, Props } from './LoginScreen.interface';

function LogInScreen({ navigation: { navigate } }: Props) {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<IUser>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<Error | null>(null);

  const onAuthStateChanged = useCallback(
    usr => {
      setUser(usr);
      if (initializing) setInitializing(false);
    },
    [initializing]
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  const login = useCallback(() => {
    if (email && password) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setError(null);
          navigate('Listings');
        })
        .catch(setError);
    }
  }, [email, password, navigate]);

  if (initializing) return <Spinner />;

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
      <Button block primary onPress={login} style={styles.m5}>
        <Text>Log in</Text>
      </Button>
      {error && <Text>Error: {error.message}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  p10: { padding: 10 },
  m5: { margin: 5 },
});

export default LogInScreen;
