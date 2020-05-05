import { Body, Container, Content, Header, Subtitle, Text, Title, View } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet, useWindowDimensions } from 'react-native';
import { NewAdForm } from '../../components';

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
      <Content padder scrollEnabled contentContainerStyle={styles.grow}>
        <ImageBackground
          source={{ uri: `https://picsum.photos/${windowWidth}/${windowHeight}` }}
          style={styles.flex}
          resizeMode="cover"
          imageStyle={styles.opacity}
        >
          <View style={styles.container}>
            <Text style={styles.formTitle}>Post a new Item</Text>
          </View>
          <NewAdForm />
        </ImageBackground>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  flex: { flex: 1 },
  opacity: { opacity: 0.5 },
  grow: { flexGrow: 1 },
  formTitle: { textAlign: 'center', fontSize: 32, fontWeight: 'bold' },
});

export default PostNewScreen;
