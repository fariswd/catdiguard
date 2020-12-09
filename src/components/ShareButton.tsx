import React from 'react';
import {TouchableOpacity, ToastAndroid} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';

type Props = {
  imageRef: any;
};

export default function ShareButton(props: Props) {
  const shareImage = async () => {
    try {
      const base64 = await captureRef(props.imageRef, {
        result: 'data-uri',
      });
      const shareOptions = {
        title: 'Meeaaawwwww',
        url: base64,
        failOnCancel: false,
      };
      await Share.open(shareOptions);
    } catch (error) {
      ToastAndroid.showWithGravity(
        'Something wrong!!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  };
  return (
    <TouchableOpacity onPress={() => shareImage()}>
      <Ionicons name="share-social-outline" size={28} color="#666" />
    </TouchableOpacity>
  );
}
