/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Button, View } from 'react-native';
import { Formik } from 'formik';
import { Item, Label, Container, Content, Textarea, Input, Text } from 'native-base';

export const PostNewScreen: React.FC = () => (
  <Container>
    <Content padder>
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Item>
              <Label>Title</Label>
              <Input
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
              />
            </Item>
            <Textarea
              rowSpan={5}
              underline={false}
              bordered
              placeholder="Description"
              onChangeText={handleChange('description')}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                // flexWrap: 'wrap',
              }}
            >
              <Text style={{ flex: 1, flexWrap: 'wrap' }}>Photo container 1</Text>
              <Text style={{ flex: 1, flexWrap: 'wrap' }}>Photo container 2</Text>
              <Text style={{ flex: 1, flexWrap: 'wrap' }}>Photo container 3</Text>
              <Text style={{ flex: 1, flexWrap: 'wrap' }}>Photo container 4</Text>
            </View>
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </Content>
  </Container>
);

export default PostNewScreen;
