/* eslint-disable react-native/no-inline-styles */
import { Formik } from 'formik';
import { Button, Container, Content, Input, Item, Text, Textarea, View } from 'native-base';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { ImagePicker } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

export const PostNewScreen: React.FC = () => (
  <Container>
    <Content padder contentContainerStyle={styles.flex}>
      <ScrollView>
        <Formik
          initialValues={{ title: '', description: '', price: 0 }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.form}>
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
                <View style={{ flexDirection: 'row', height: 100, justifyContent: 'space-evenly' }}>
                  <Image
                    source={{ uri: 'https://picsum.photos/100' }}
                    resizeMode="contain"
                    style={{ flex: 1, margin: 10 }}
                  />
                  <Image
                    source={{ uri: 'https://picsum.photos/300' }}
                    resizeMode="contain"
                    style={{ flex: 1, margin: 10 }}
                  />
                  <Image
                    source={{ uri: 'https://picsum.photos/200' }}
                    resizeMode="contain"
                    style={{ flex: 1, margin: 10 }}
                  />
                  <Image
                    source={{ uri: 'https://picsum.photos/400' }}
                    resizeMode="contain"
                    style={{ flex: 1, margin: 10 }}
                  />
                </View>
                <Item regular>
                  <Input
                    onChangeText={handleChange('price')}
                    onBlur={handleBlur('price')}
                    value={values.title}
                    placeholder="price"
                  />
                </Item>
                <ImagePicker />
              </View>
              <View>
                <Button onPress={handleSubmit} style={{ justifyContent: 'center' }}>
                  <Text>Submit</Text>
                </Button>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  flex: { flex: 1 },
  grow: { flexGrow: 1 },
  form: { backgroundColor: '#4286f4', flex: 1, flexGrow: 1 },
});

export default PostNewScreen;
