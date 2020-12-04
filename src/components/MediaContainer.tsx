import React, {useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ViewShot from 'react-native-view-shot';
import FastImage from 'react-native-fast-image';

import HeartButton from '../components/HeartButton';
import DownloadButton from '../components/DownloadButton';
import ShareButton from './ShareButton';

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
          <FastImage
            source={{uri: item.url}}
            style={{width: 40, height: 40}}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
            paddingHorizontal: 8,
          }}>
          <Text>{item.id}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail', {item: item})}
          disabled={disableDetail}
          style={{justifyContent: 'center'}}>
          <Ionicons name="information-circle-outline" size={28} color="#666" />
        </TouchableOpacity>
      </View>
      <ViewShot
        //@ts-ignore
        ref={imageRef}>
        <FastImage
          source={{uri: item.url, priority: FastImage.priority.normal}}
          style={{width: WIDTH_SCREEN, height: WIDTH_SCREEN}}
          resizeMode={FastImage.resizeMode.cover}
        />
      </ViewShot>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingTop: 6,
          paddingBottom: 10,
        }}>
        <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
          <View>
            <DownloadButton imageRef={imageRef} />
          </View>
          <View style={{width: 4}} />
          <View>
            <ShareButton imageRef={imageRef} />
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
          <HeartButton item={item} />
        </View>
      </View>
    </View>
  );
}
