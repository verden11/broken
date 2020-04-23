/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Formik } from 'formik';
import { View, Item, Button, Container, Content, Textarea, Input, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

export const PostNewScreen: React.FC = () => (
  <Container>
    <Content padder contentContainerStyle={styles.flex}>
      <Formik
        initialValues={{ title: '', description: '' }}
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
            </View>
            <View>
              <Button onPress={handleSubmit} style={{ justifyContent: 'center' }}>
                <Text>Submit</Text>
              </Button>
            </View>
          </View>
        )}
      </Formik>
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  flex: { flex: 1 },
  grow: { flexGrow: 1 },
  form: { backgroundColor: '#4286f4', flex: 1, flexGrow: 1 },
});

export default PostNewScreen;
