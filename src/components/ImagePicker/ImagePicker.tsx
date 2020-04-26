/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { View, Text } from 'native-base';

const ImgPicker: React.FC = () => {
  const [filePath, setFilePath] = useState({ data: '', uri: '' });
  const [fileData, setFileData] = useState('');
  const [fileUri, setFileUri] = useState('');

  const chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [{ name: 'customOptionKey', title: 'Choose Photo from Custom Option' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log('response', JSON.stringify(response));
        setFilePath(response);
        setFileData(response.data);
        setFileUri(response.uri);
      }
    });
  };

  function renderFileData() {
    if (fileData) {
      return <Image source={{ uri: 'data:image/jpeg;base64,' + fileData }} style={styles.images} />;
    } else {
      return <Image source={require('../assets/dummy.png')} style={styles.images} />;
    }
  }

  function renderFileUri() {
    if (fileUri) {
      return <Image source={{ uri: fileUri }} style={styles.images} />;
    } else {
      return <Image source={require('../assets/dummy.png')} style={styles.images} />;
    }
  }
  return (
    <View>
      <View style={styles.body}>
        <View style={styles.ImageSections}>
          <View>
            {renderFileData()}
            <Text style={{ textAlign: 'center' }}>Base 64 String</Text>
          </View>
          <View>
            {renderFileUri()}
            <Text style={{ textAlign: 'center' }}>File Uri</Text>
          </View>
        </View>

        <View style={styles.btnParentSection}>
          <TouchableOpacity onPress={chooseImage} style={styles.btnSection}>
            <Text style={styles.btnText}>Choose File</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ImgPicker;
