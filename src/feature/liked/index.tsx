import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {useReactiveVar} from '@apollo/client';

import {catListVar} from '../../config/apollo/cache';
import MediaContainer from '../../components/MediaContainer';

export default function Liked({navigation}: any) {
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
        renderItem={(props: any) => (
          <MediaContainer {...props} navigation={navigation} />
        )}
      />
    </View>
  );
}
