import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {useReactiveVar} from '@apollo/client';
import {WIDTH_SCREEN} from '../../helpers';
import HeartButton from './../home/components/HeartButton';

import {catListVar} from '../../config/apollo/cache';

export default function Liked() {
  const cats = useReactiveVar(catListVar);

  if (cats.length == 0) {
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Find your spirit animal naw!!</Text>
    </View>;
  }
  return (
    <View>
      <FlatList
        data={cats}
        renderItem={({item, index}: any) => {
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
                  <Text>{item.id}</Text>
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
        }}
      />
    </View>
  );
}
