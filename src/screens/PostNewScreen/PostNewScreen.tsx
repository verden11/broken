import { Formik } from 'formik';
import {
  Body,
  Button,
  Container,
  Content,
  Form,
  Header,
  Input,
  Item,
  Subtitle,
  Text,
  Textarea,
  Title,
  View,
} from 'native-base';
import React from 'react';
import { StyleSheet, useWindowDimensions, ImageBackground } from 'react-native';
import { ImgPicker } from '../../components';
import firestore from '@react-native-firebase/firestore';

export const PostNewScreen: React.FC = () => {
  const windowWidth = Math.round(useWindowDimensions().width);
  const windowHeight = Math.round(useWindowDimensions().height);

  function postToFirebase(data: any) {
    console.log(data);
    firestore()
      .collection('listings')
      .add(data)
      .then(() => console.log('added'));
  }

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
          style={styles.flex}
          resizeMode="cover"
          imageStyle={styles.opacity}
        >
          <View style={styles.container}>
            <Text style={styles.formTitle}>Post a new Item</Text>
            <Formik
              initialValues={{
                title: '',
                description: '',
                price: '',
                img1: '',
                img2: '',
                img3: '',
              }}
              onSubmit={postToFirebase}
            >
              {({ handleChange, handleSubmit, values }) => (
                <Form style={styles.grow}>
                  <View style={styles.grow}>
                    <Item regular>
                      <Input
                        onChangeText={handleChange('title')}
                        value={values.title}
                        placeholder="title"
                      />
                    </Item>
                    <Textarea
                      rowSpan={5}
                      underline={false}
                      bordered
                      placeholder="Description"
                      onChangeText={handleChange('description')}
                    />
                    <View style={styles.imageRow}>
                      <ImgPicker upload={handleChange('img1')} />
                      <ImgPicker upload={handleChange('img2')} />
                      <ImgPicker upload={handleChange('img3')} />
                    </View>
                    <Item regular>
                      <Input
                        onChangeText={handleChange('price')}
                        value={values.price}
                        placeholder="price"
                      />
                    </Item>
                  </View>
                  <View>
                    <Button onPress={handleSubmit} style={styles.justifyCenter}>
                      <Text>Submit</Text>
                    </Button>
                  </View>
                </Form>
              )}
            </Formik>
          </View>
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
  imageRow: { flexDirection: 'row', justifyContent: 'space-evenly' },
  justifyCenter: { justifyContent: 'center' },
  formTitle: { textAlign: 'center', fontSize: 32, fontWeight: 'bold' },
});

export default PostNewScreen;
