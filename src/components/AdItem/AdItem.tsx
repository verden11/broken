/* eslint-disable no-bitwise */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text, View, Item } from 'native-base';

const AdItem: React.FC<any> = ({ item }) => {
  const { title, description, price, img } = item;
  return (
    <Item onPress={() => console.log('should open detailed item view')}>
      <View style={styles.container}>
        <Image source={{ uri: img[0] }} style={styles.image} resizeMode="contain" />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text>{description}</Text>
          <Text style={styles.price}>Price: {price}</Text>
        </View>
      </View>
    </Item>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#e2e8f0',
  },
  image: { flex: 1 },
  content: { flex: 2, paddingLeft: 20 },
  title: { fontSize: 16, fontWeight: 'bold' },
  price: { textAlign: 'center' },
});

export default AdItem;
