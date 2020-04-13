import React from 'react';
import { View, Text, Button } from 'native-base';

import { Props } from './ListingsScreen.interface';

function ListingsScreen({ navigation: { goBack } }: Props) {
  return (
    <View>
      <Text>Listings Screen</Text>
      <Button onPress={goBack}>
        <Text>Go Back</Text>
      </Button>
    </View>
  );
}

export default ListingsScreen;
