import storage from '@react-native-firebase/storage';
import { Item, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import AdImageModal from '../AdImageModal/AdImageModal';

const AdItem: React.FC<any> = ({ item }) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const [isModal, setModal] = useState<boolean>(false);
  const { title, description, price, img1 } = item;
  useEffect(() => {
    (async () => {
      const url = await storage().ref(img1).getDownloadURL();
      setImgUrl(url);
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
    </Item>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1, flexDirection: 'row', padding: 10 },
  'bg-gray-400': { backgroundColor: '#cbd5e0' },
  content: { flex: 2, paddingLeft: 20 },
  title: { fontSize: 24, fontWeight: '500', textAlign: 'center', textTransform: 'capitalize' },
  description: { fontSize: 14, paddingHorizontal: 20, flexGrow: 1 },
  price: { textAlign: 'center', fontSize: 16 },
});

export default AdItem;
