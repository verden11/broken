import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text, View } from 'native-base';

const AddItem: React.FC<any> = ({ item }) => {
  const { title, description, price, img } = item;
  return (
    <View style={styles.item}>
      <Image source={{ uri: img[0] }} style={{ width: 50, height: 50 }} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: { fontSize: 16 },
});

export default AddItem;
