import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useReactiveVar} from '@apollo/client';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {catListVar} from '../config/apollo/cache';

type Props = {
  item: Item;
};

type Item = {
  id: string;
  url: string;
};

export default function HeartButton(props: Props) {
  const {item} = props;
  const [loading, setLoading] = useState(false);
  const catLists: any = useReactiveVar(catListVar);

  const loveButton = async () => {
    setLoading(true);
    const isOnList = isLiked(catLists);
    if (!isOnList) {
      const newCatList: Item[] = [item, ...catLists];
      await catListVar(newCatList);
      await AsyncStorage.setItem(
        'CAT_LIST',
        JSON.stringify([item, ...catLists]),
      );
      setLoading(false);
    } else {
      const newCatList = catLists.filter((c: {id: string}) => c.id != item.id);
      await catListVar(newCatList);
      await AsyncStorage.setItem('CAT_LIST', JSON.stringify(newCatList));
      setLoading(false);
    }
  };

  const isLiked = (cats: []) => {
    return cats.filter((c: {id: string}) => item.id == c.id).length > 0;
  };

  if (loading) {
    <Text>Loading</Text>;
  }

  return (
    <TouchableOpacity onPress={() => loveButton()}>
      <Ionicons
        name={isLiked(catLists) ? 'heart' : 'heart-outline'}
        color={isLiked(catLists) ? 'tomato' : '#666'}
        size={28}
      />
    </TouchableOpacity>
  );
}
