import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage, { firebase } from '@react-native-firebase/storage';
import { Item, Text, View, Button } from 'native-base';
import { AdImageModal } from '~/components';
import { PostNewScreen } from '~/screens';


const EditItem: React.FC<any> = ({ item, navigation }) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const [isModal, setModal] = useState<boolean>(false);
  // const [delete, setDelete] = useState<boolean>(false);
  const { title, description, price, images, id } = item;

  function deleteItem(id: string | undefined) {
    firestore()
      .collection('listings')
      .doc(id)
      .delete()
      .then(() => {
        console.log(id + ' deleted');
      })
      .catch(error => console.log(error));
    // setDelete(true);
  }


  useEffect(() => {
    (async () => {
      if (images[0]) {
        const url = await storage().ref(images[0]).getDownloadURL();
        setImgUrl(url);
      }
    })();
  }, []);

  return (
    <Item
      style={[styles.container, styles['bg-gray-400']]}
      onPress={() => console.log('overall press')}
    >
      <Item style={{ flex: 1 }} onPress={() => setModal(true)}>
        <Image source={{ uri: imgUrl }} style={{ flex: 1, aspectRatio: 1 }} />
        <AdImageModal isVisible={isModal} close={() => setModal(false)} uri={imgUrl} />
      </Item>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}$</Text>
      </View>
      <Button onPress={() => deleteItem(id)}>
        {/* refresh after delet */}
        <Text>Delete</Text>
      </Button>
      {/* KAIP CIA TA NAVIGATE PADARYT AR KAD RENDERINTU PostNewScreen
      As galvoju dar kita buda su modal ir rodyt arba nerodyt */}
      <Button onPress={() => navigation.navigate(PostNewScreen)}>
        <Text>Edit</Text>
      </Button>
    </Item>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1, flexDirection: 'row', padding: 10 },
  'bg-gray-400': { backgroundColor: '#cbd5e0' },
  content: { flex: 2, paddingLeft: 20 },
  title: { fontSize: 24, fontWeight: '500', textTransform: 'capitalize' },
  description: { fontSize: 14, flexGrow: 1 },
  price: { fontSize: 16 },
});

export default EditItem;
