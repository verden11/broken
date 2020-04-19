import { Button, Text, View } from 'native-base';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Props } from './ListingsScreen.interface';

function ListingsScreen({ navigation }: Props) {
  const { authContext } = useContext(AuthContext);
  return (
    <View>
      <Text>Listings Screen</Text>
      <Button onPress={authContext.signOut}>
        <Text>Logout</Text>
      </Button>
    </View>
  );
}

export default ListingsScreen;
