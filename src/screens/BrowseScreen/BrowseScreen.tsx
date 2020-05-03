import { Container, Header, Title, Subtitle, Body } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { AdItem, Separator } from '../../components';
import firestore from '@react-native-firebase/firestore';

type fireStoreDoc = {
  id: string;
  img1?: string;
  img2?: string;
  img3?: string;
  price?: string;
  title?: string;
};

const BrowseScreen: React.FC = () => {
  const [data, setData] = useState<fireStoreDoc[]>([]);
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
      <Header>
        <Body>
          <Title>Browse Screen</Title>
          <Subtitle>Render all item</Subtitle>
        </Body>
      </Header>
      <FlatList
        data={data}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => <AdItem item={item} />}
        keyExtractor={item => item.id}
        refreshing={isRefreshing}
        onRefresh={refresh}
      />
    </Container>
  );
};

export default BrowseScreen;
