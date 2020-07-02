import React from 'react';
import { StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Formik } from 'formik';
import { Button, Form, Input, Text, Textarea, View } from 'native-base';
import * as Yup from 'yup';

import { ImgPicker } from '~/components';

// @ TODO improve validation scheme
const AdSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  description: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  price: Yup.string().min(1, 'Too Short!').max(10, 'Too Long!').required('Required'),
  images: Yup.array().compact().required('Required'), // @TODO img src should begin with user id
});

const NewAdForm: React.FC = (props) => {
  const email = auth().currentUser?.email;
  function postToFirebase(data: any) {
    const userId = auth().currentUser?.uid;
    const formatedData = {
      ...data,
      email: email,
      userID: userId,
      images: data.images.filter(Boolean),
    };
    console.log(formatedData);
    firestore()
      .collection('listings')
      .doc(props.id)
      .update(formatedData)
      // .add(formatedData)
      .then(() => console.log('added'))
      .catch(error => console.warn(error));
    // @ TODO add catch / error handling
  }

  return (
    <Formik
      initialValues={{
        title: props.title,
        description: props.description,
        price: props.price,
        images: props.images,
      }}
      validationSchema={AdSchema}
      onSubmit={postToFirebase}
    >
      {/* @TODO reset form after submit */}
      {/* @TODO show validation errors */}
      {({ handleChange, handleSubmit, values, setFieldValue, errors }) => (
        <Form style={styles.grow}>
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

            <Input
              onChangeText={handleChange('price')}
              value={values.price}
              placeholder="price"
              style={styles.inputField}
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
          </View>
          <View>
            <Button
              onPress={() => setFieldValue('images', [...values.images, ''])}
              style={styles.justifyCenter}
              info
            >
              <Text>Add more images</Text>
            </Button>
            <Button onPress={handleSubmit} style={styles.justifyCenter} info>
              <Text>Submit Edit</Text>
            </Button>
          </View>
        </Form>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  inputField: { fontSize: 24, fontWeight: '500', flexGrow: 0 },
  opacity: { opacity: 0.5 },
  grow: { flexGrow: 1 },
  imageRow: { flexDirection: 'row', flexWrap: 'wrap' },
  justifyCenter: { justifyContent: 'center' },
  formTitle: { textAlign: 'center', fontSize: 32, fontWeight: 'bold' },
});

export default NewAdForm;
