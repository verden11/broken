import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { View, Text } from 'native-base';

const DATA = [
  {
    id: 'a',
    title: 'First Item',
  },
  {
    id: 'b',
    title: 'Second Item',
  },
  {
    id: 'c',
    title: 'Third Item',
  },
  {
    id: 'd',
    title: 'Fourth Item',
  },
  {
    id: 'e',
    title: 'Fifth Item',
  },
  {
    id: 'f',
    title: 'Sixth Item',
  },
  {
    id: 'g',
    title: 'Seventh Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const BrowseScreen: React.FC = () => {
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
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
    fontSize: 32,
  },
});
export default BrowseScreen;
