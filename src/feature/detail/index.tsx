import React from 'react';
import {View, Text} from 'react-native';
import MediaContainer from '../../components/MediaContainer';

import {useRoute} from '@react-navigation/native';

export default function DetailCat({navigation}: any) {
  const {params}: any = useRoute();
  // const item = routes.state
  console.log(params.item, '----what inside');
  return (
    <View>
      <MediaContainer
        item={params.item}
        key={`detail${params.item.key}`}
        disableDetail
      />
    </View>
  );
}
