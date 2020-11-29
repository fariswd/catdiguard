import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ViewShot from 'react-native-view-shot';

import HeartButton from '../components/HeartButton';
import DownloadButton from '../components/DownloadButton';

import {WIDTH_SCREEN} from '../helpers';

export default function MediaContainer({
  item,
  index,
  disableDetail,
  navigation,
}: any) {
  const imageRef = useRef();
  return (
    <View key={`cat-${index}`}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 8,
          marginBottom: 8,
          marginTop: 15,
        }}>
        <View
          style={{
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <Image
            source={{uri: item.url}}
            style={{width: 40, height: 40}}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
            paddingHorizontal: 8,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', {item: item})}
            disabled={disableDetail}>
            <Text>{item.id}</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center'}}>
          {/* <Ionicons name="ellipsis-vertical" size={24} color="#666" /> */}
        </View>
      </View>
      <ViewShot ref={imageRef}>
        <Image
          source={{uri: item.url}}
          style={{width: WIDTH_SCREEN, height: WIDTH_SCREEN}}
          resizeMode="cover"
        />
      </ViewShot>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 8,
          paddingTop: 6,
          paddingBottom: 10,
        }}>
        <View style={{justifyContent: 'flex-start'}}>
          <DownloadButton imageRef={imageRef} />
        </View>
        <View style={{justifyContent: 'center'}}>
          <HeartButton item={item} />
        </View>
      </View>
    </View>
  );
}
