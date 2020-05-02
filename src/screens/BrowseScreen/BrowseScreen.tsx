import { Container, Header, Title, Subtitle, Body } from 'native-base';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { AdItem, Separator } from '../../components';
import firestore from '@react-native-firebase/firestore';

const DATA = [];

const BrowseScreen: React.FC = () => {
  useEffect(() => {
    (async () => {
      await firestore()
        .collection('listings')
        .get()
        .then(querySnapshot => {
          // console.log('Total users: ', querySnapshot.size);

          querySnapshot.forEach(documentSnapshot => {
            DATA.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
          });
        });
    })();
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
        data={DATA}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => <AdItem item={item} />}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default BrowseScreen;
