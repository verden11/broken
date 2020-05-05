import { Item } from 'native-base';
import React, { useState, useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { AuthContext } from '../../context/AuthContext';

const ImgPicker: React.FC<{ upload: Function; value: string }> = ({ upload, value }) => {
  const [fileUri, setFileUri] = useState('');
  const { user } = useContext(AuthContext);

  const choosePicture = () => {
    let options = {
      title: 'Select Photo',
      takePhotoButtonTitle: 'Take Photo',
      chooseFromLibraryButtonTitle: 'Choose from Gallery',
      noData: true,
      storageOptions: {
        privateDirectory: true,
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setFileUri(response.uri);
        if (response.path) {
          const filePath = `${user.uid}/${response.fileName}`;
          const reference = storage().ref(filePath);
          await reference.putFile(response.path);
          upload(filePath);
        }
      }
    });
  };

  return (
    <Item style={styles.imageContainer} onPress={choosePicture}>
      <Image
        source={fileUri && value ? { uri: fileUri } : require('../assets/dummy.png')}
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
