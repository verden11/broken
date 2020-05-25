import React from 'react';
import { ImageBackground, StyleSheet, useWindowDimensions } from 'react-native';

import { Body, Container, Content, Header, Subtitle, Text, Title, View } from 'native-base';
import { NewAdForm } from '~/components';

export const PostNewScreen: React.FC = () => {
  const windowWidth = Math.round(useWindowDimensions().width);
  const windowHeight = Math.round(useWindowDimensions().height);

  return (
    <Container>
      <Header>
        <Body>
          <Title>Post new Screen</Title>
          <Subtitle>crate new listing</Subtitle>
        </Body>
      </Header>
      <Content padder scrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={{ uri: `https://picsum.photos/${windowWidth}/${windowHeight}` }}
          style={{ flex: 1 }}
          resizeMode="cover"
          imageStyle={{ opacity: 0.4 }}
        >
          <View style={{ flexGrow: 1 }}>
            <Text style={styles.formTitle}>Post a new Item</Text>
            <NewAdForm />
          </View>
        </ImageBackground>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  formTitle: { textAlign: 'center', fontSize: 32, fontWeight: 'bold' },
});

export default PostNewScreen;
