import { Container, Header, Title, Subtitle, Body, Text } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';
import { AdItem, Separator } from '../../components';

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

const BrowseScreen: React.FC = () => {
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
