import { Item } from 'native-base';
import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ImgPicker: React.FC = () => {
  const [fileData, setFileData] = useState('');

  const choosePicture = () => {
    let options = {
      title: 'Select Photo',
      takePhotoButtonTitle: 'Take Photo',
      chooseFromLibraryButtonTitle: 'Choose from Gallery',
      mediaType: 'photo',
      storageOptions: {
        privateDirectory: true,
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setFileData(response.data);
      }
    });
  };

  return (
    <Item style={styles.imageContainer} onPress={choosePicture}>
      <Image
        source={
          fileData ? { uri: 'data:image/jpeg;base64,' + fileData } : require('../assets/dummy.png')
        }
        resizeMode="contain"
        style={styles.images}
      />
    </Item>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  images: { flex: 1, aspectRatio: 1 },
});

export default React.memo(ImgPicker);
