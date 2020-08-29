import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import firestore from '@react-native-firebase/firestore';
import { Body, Container, Header, Title } from 'native-base';

import { AdItem, ListItemSeparator } from '~/components';

interface IFireStoreDoc {
  id: string;
  title?: string;
  description?: string;
  price?: string;
  images?: string[];
}

const BrowseScreen: React.FC = () => {
  const [data, setData] = useState<Array<IFireStoreDoc>>([]);
  const [isRefreshing, setRefreshing] = useState<boolean>(false);
  const collectionRef = firestore().collection('listings');

  async function refresh() {
    setRefreshing(true);
    const data = await collectionRef.get();
    const documents = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setData(documents);
    setRefreshing(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <Container>
      <Header style={styles['bg-gray-300']}>
        <Body>
          <Title style={styles['text-orange-600']}>Items for sale</Title>
        </Body>
      </Header>
      <FlatList
        style={styles['bg-gray-700']}
        data={data}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => <AdItem item={item} />}
        keyExtractor={item => item.id}
        refreshing={isRefreshing}
        onRefresh={refresh}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  'text-orange-600': { color: '#dd6b20' },
  'bg-gray-300': { backgroundColor: '#e2e8f0' },
  'bg-gray-700': {
    backgroundColor: '#4a5568',
  },
});

export default BrowseScreen;
