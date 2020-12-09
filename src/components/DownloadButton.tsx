import React from 'react';
import {TouchableOpacity, PermissionsAndroid, ToastAndroid} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CameraRoll from '@react-native-community/cameraroll';

type Props = {
  imageRef: any;
};

export default function DownloadButton(props: Props) {
  const checkPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };
  const saveImage = async () => {
    const isAllowed = await checkPermission();
    if (isAllowed) {
      console.log(props.imageRef.current);
      props.imageRef.current.capture().then(async (uri: string) => {
        await CameraRoll.save(uri, {type: 'photo', album: 'Cat'});
        ToastAndroid.showWithGravity(
          'Cat has been saved!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      });
    }
  };

  return (
    <TouchableOpacity onPress={() => saveImage()}>
      <Ionicons name="download-outline" size={28} color="#666" />
    </TouchableOpacity>
  );
}
