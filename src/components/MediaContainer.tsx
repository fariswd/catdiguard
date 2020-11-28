import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import HeartButton from '../components/HeartButton';

import {WIDTH_SCREEN} from '../helpers';

export default function MediaContainer({
  item,
  index,
  disableDetail,
  navigation,
}: any) {
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
          <HeartButton item={item} />
          {/* <Ionicons name="ellipsis-vertical" size={20} color="#666" /> */}
        </View>
      </View>
      <Image
        source={{uri: item.url}}
        style={{width: WIDTH_SCREEN, height: WIDTH_SCREEN}}
        resizeMode="cover"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingHorizontal: 8,
          paddingVertical: 10,
        }}></View>
    </View>
  );
}
