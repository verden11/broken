import storage from '@react-native-firebase/storage';
import { Item, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';

const AdItem: React.FC<any> = ({ item }) => {
  const { title, description, price, img1 } = item;
  const [imgUrl, setImgUrl] = useState<any>();
  useEffect(() => {
    (async () => {
      const url = await storage().ref(img1).getDownloadURL();
      setImgUrl(url);
    })();
  }, []);
  return (
    <Item onPress={() => console.log('should open detailed item view')}>
      <View style={[styles.container, styles['bg-gray-400']]}>
        <View style={styles.flex}>
          <Image source={{ uri: imgUrl }} style={styles.flex} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>Price: {price}</Text>
        </View>
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
  description: { fontSize: 14, paddingHorizontal: 20 },
  price: { textAlign: 'center', fontSize: 12 },
});

export default AdItem;
