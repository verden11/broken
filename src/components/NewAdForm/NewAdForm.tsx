import firestore from '@react-native-firebase/firestore';
import { Formik } from 'formik';
import { Button, Form, Input, Text, Textarea, View } from 'native-base';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ImgPicker } from '../index';
import * as Yup from 'yup';

// @ TODO improve validation scheme
const AdSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  description: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  price: Yup.string().min(1, 'Too Short!').max(10, 'Too Long!').required('Required'),
  images: Yup.array().compact().required('Required'), // @TODO img src should begin with user id
});

const NewAdForm = () => {
  function postToFirebase(data: any) {
    console.log(data);
    firestore()
      .collection('listings')
      .add({ ...data })
      .then(() => console.log('added'));
    // @ TODO add catch / error handling
  }

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        price: '',
        images: [],
      }}
      validationSchema={AdSchema}
      onSubmit={postToFirebase}
    >
      {/* @TODO reset form after submit */}
      {/* @TODO show validation errors */}
      {({ handleChange, handleSubmit, values, setFieldValue, errors }) => (
        <Form style={styles.grow}>
          {errors && <Text>{JSON.stringify(errors)}</Text>}
          <View style={styles.grow}>
            <Input
              onChangeText={handleChange('title')}
              value={values.title}
              placeholder="title"
              style={styles.inputField}
            />
            <Textarea
              value={values.description}
              style={styles.inputField}
              placeholder="Description"
              onChangeText={handleChange('description')}
              rowSpan={5}
              underline={false}
              bordered
            />

            <View style={styles.imageRow}>
              {values.images.map((image, index) => (
                <ImgPicker
                  key={index}
                  upload={handleChange(`images[${index}]`)}
                  value={values.images[index]}
                />
              ))}
            </View>

            <Input
              onChangeText={handleChange('price')}
              value={values.price}
              placeholder="price"
              style={styles.inputField}
            />
          </View>
          <View>
            <Button
              onPress={() => setFieldValue('images', [...values.images.filter(Boolean), ''])}
              style={styles.justifyCenter}
              info
            >
              <Text>Add Image</Text>
            </Button>
            <Button onPress={handleSubmit} style={styles.justifyCenter} primary>
              <Text>Submit</Text>
            </Button>
          </View>
        </Form>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  inputField: { fontSize: 24, fontWeight: '500' },
  container: { flex: 1 },
  flex: { flex: 1 },
  opacity: { opacity: 0.5 },
  grow: { flexGrow: 1 },
  imageRow: { flexDirection: 'row', justifyContent: 'space-evenly' },
  justifyCenter: { justifyContent: 'center' },
  formTitle: { textAlign: 'center', fontSize: 32, fontWeight: 'bold' },
});

export default NewAdForm;
