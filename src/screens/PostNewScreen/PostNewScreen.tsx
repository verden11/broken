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
import { StyleSheet } from 'react-native';
import { ImgPicker } from '../../components';

export const PostNewScreen: React.FC = () => (
  <Container>
    <Header>
      <Body>
        <Title>Post new Screen</Title>
        <Subtitle>crate new listing</Subtitle>
      </Body>
    </Header>
    <Content padder contentContainerStyle={styles.flex}>
      <View style={styles.container}>
        <Text style={styles.textCenter}>Post a new Item</Text>
        <Formik
          initialValues={{ title: '', description: '', price: 0 }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Form style={styles.grow}>
              <View style={styles.grow}>
                <Item regular>
                  <Input
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
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
                  <ImgPicker />
                  <ImgPicker />
                  <ImgPicker />
                  <ImgPicker />
                </View>
                <Item regular>
                  <Input
                    onChangeText={handleChange('price')}
                    onBlur={handleBlur('price')}
                    value={values.title}
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
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  container: { backgroundColor: '#4286f4', flex: 1 },
  flex: { flex: 1 },
  grow: { flexGrow: 1 },
  imageRow: { flexDirection: 'row', justifyContent: 'space-evenly' },
  justifyCenter: { justifyContent: 'center' },
  textCenter: { textAlign: 'center' },
});

export default PostNewScreen;
