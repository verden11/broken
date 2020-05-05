import firestore from '@react-native-firebase/firestore';
import { Formik } from 'formik';
import { Button, Form, Input, Item, Text, Textarea, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ImgPicker } from '../index';

const NewAdForm = () => {
  function postToFirebase(data: any) {
    console.log(data);
    firestore()
      .collection('listings')
      .add(data)
      .then(() => console.log('added'));
  }
  return (
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

export default NewAdForm;
