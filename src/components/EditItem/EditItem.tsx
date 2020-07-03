import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Alert, TouchableHighlight, Modal, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Item, Text, View, Button, Icon } from 'native-base';
import { AdImageModal, EditForm } from '~/components';


const EditItem: React.FC<any> = ({ item, navigation }) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const [isModal, setModal] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
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
      <Item style={styles.flex} onPress={() => setModal(true)}>
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
      <Button onPress={() => setModalVisible(true)}>
        <Text>Edit</Text>
      </Button>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <ScrollView style={styles.scrollView}>
          <TouchableHighlight
            style={styles.hideModal}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Icon style={{padding: 9}} name="close"/>
            {/* <Text style={{ textAlign: 'center' }}>Hide Modal</Text> */}
          </TouchableHighlight>
          <EditPopUp
            id={id}
            title={title}
            description={description}
            price={price}
            images={images}
          />
        </ScrollView>
      </Modal>
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
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 5,
  },
  hideModal: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 50,
    width: 50,
    color: '#c6e1e3',
    right: 5,
    position: 'absolute',
    zIndex: 1,
    borderColor: '#A4A19A',
    borderRadius: 5,
    borderWidth: 2,
    // backgroundColor: '#e31c23',
  },
});

const EditPopUp = (props) => {
  return (
    <EditForm
      title={props.title}
      description={props.description}
      price={props.price}
      images={props.images}
      id={props.id}
    />
  );
}

export default EditItem;
