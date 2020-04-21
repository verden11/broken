import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import { Image } from 'react-native';

// @TODO get data from the cloud
const DATA = [
  {
    id: 'a',
    img: ['https://picsum.photos/100/100', 'foobar'],
    title: 'Macbook Pro 2019',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex.',
    price: 3.14,
  },
  {
    id: 'b',
    img: ['https://picsum.photos/101/101'],
    title: 'Audio Technika ATH MX-50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget.',
    price: 0,
  },
  {
    id: 'c',
    img: ['https://picsum.photos/102/102'],
    title: 'VS Code',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue magna non risus scelerisque, ac.',
    price: 99,
  },
  {
    id: 'd',
    img: ['https://picsum.photos/103/103'],
    title: 'Samsung TV',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate venenatis sapien et lobortis. Vestibulum.',
    price: 42.01,
  },
  {
    id: 'e',
    img: ['https://picsum.photos/104/104'],
    title: 'USB Cable',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere erat vitae nisi bibendum convallis.',
    price: 77.31,
  },
];

function Item({ item }) {
  const { title, description, price, img } = item;
  return (
    <View style={styles.item}>
      {/* <Image source={{ uri: img[0].toString() }} /> */}
      <Image source={{ uri: img[0] }} style={{ width: 50, height: 50 }} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
}

const BrowseScreen: React.FC = () => {
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
export default BrowseScreen;
