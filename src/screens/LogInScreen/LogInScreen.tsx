import { Button, Input, Item, Label, Text } from 'native-base';
import React, { useCallback, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { Props } from './LoginScreen.interface';

const LogInScreen: React.FC<Props> = ({ navigation }) => {
  const { authContext } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<Error | null>(null);

  const login = useCallback(() => {
    authContext.signIn(email, password).catch(setError);
  }, [authContext, email, password]);

  // @TODO show loading spinner after clicking login
  return (
    <>
      <Item style={styles.m5}>
        <Label>Email</Label>
        <Input value={email} onChangeText={setEmail} />
      </Item>
      <Item style={styles.m5}>
        <Label>Password</Label>
        <Input value={password} onChangeText={setPassword} secureTextEntry />
      </Item>
      <Button block primary onPress={login} style={styles.m5}>
        <Text>Log in</Text>
      </Button>
      {error && <Text>Error: {error.message}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  p10: { padding: 10 },
  m5: { margin: 5 },
});

export default LogInScreen;
