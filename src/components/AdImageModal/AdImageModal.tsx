import React from 'react';
import { Image } from 'react-native';
import Modal from 'react-native-modal';
import { View, Text, Button } from 'native-base';

interface props {
  isVisible: boolean;
  close: () => void;
  uri: string | undefined;
}

const AdImageModal: React.FC<props> = ({ isVisible, close, uri }) => {
  return (
    <View>
      <Modal isVisible={isVisible}>
        <Image source={{ uri }} style={{ flex: 1 }} resizeMode="cover" />
        <Button onPress={close}>
          <Text>Close</Text>
        </Button>
      </Modal>
    </View>
  );
};

export default AdImageModal;
