import auth from '@react-native-firebase/auth';
import { Button, Input, Item, Spinner, Text, Form, Label } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

interface providerData {
  displayName: any;
  email: string;
  phoneNumber: any;
  photoURL: any;
  providerId: string;
  uid: string;
}

interface IUser {
  displayName: any;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: { creationTime: number; lastSignInTime: number };
  phoneNumber: any;
  photoURL: any;
  providerData: [providerData];

  providerId: 'firebase';
  uid: string;
}

function SignIn() {
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
        .then(() => setError(null))
        .catch(setError);
    }
  }, [email, password]);

  const register = useCallback(() => {
    if (email && password) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => setError(null))
        .catch(setError);
    }
  }, [email, password]);

  const logout = useCallback(() => {
    if (user) {
      auth()
        .signOut()
        .then(() => setError(null))
        .catch(setError);
    }
  }, [user]);

  if (initializing) return <Spinner />;

  return (
    <>
      <Item floatingLabel style={styles.m3}>
        <Label>Email</Label>
        <Input value={email} onChangeText={(text: string) => setEmail(text)} />
      </Item>
      <Item floatingLabel style={styles.m3}>
        <Label>Password</Label>
        <Input
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry
        />
      </Item>
      <Button block primary onPress={login} style={styles.m3}>
        <Text>Log in</Text>
      </Button>
      <Button block onPress={register} style={styles.m3}>
        <Text>Register</Text>
      </Button>
      <Button block dark onPress={logout} style={styles.m3}>
        <Text>Log out</Text>
      </Button>
      {error && <Text>Error: {error.message}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  p3: {
    padding: 10,
  },
  m3: {
    margin: 5,
  },
});

export default SignIn;
