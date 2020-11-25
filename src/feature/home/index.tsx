import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WIDTH_SCREEN} from '../../helpers';
import client from '../../config/apollo/client';
import {FlatList} from 'react-native-gesture-handler';

const GET_CAT = gql`
  query GET_CAT {
    cat(page: $page)
      @rest(type: CatResult, path: "images/search?limit=5", method: "GET") {
      result {
        url
        id
      }
    }
  }
`;

export default function HomeScreen() {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);
  const [globalLoading, setGlobalLoading] = useState(false);

  useEffect(() => {
    client
      .query({
        query: GET_CAT,
        variables: {
          page: page,
        },
      })
      .then(({data, loading}) => {
        setCats(data.cat.result);
        setPage(2);
      });
  }, []);

  const loadMore = () => {
    client
      .query({
        query: GET_CAT,
        variables: {
          page: page,
        },
      })
      .then(({data, loading}) => {
        setCats(cats.concat(data.cat.result));
        setPage(page + 1);
      });
  };

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
                {/* <View style={{justifyContent: 'center'}}>
                  <Ionicons name="ellipsis-vertical" size={20} color="#666" />
                </View> */}
              </View>
              <Image
                source={{uri: item.url}}
                style={{width: WIDTH_SCREEN, height: WIDTH_SCREEN}}
                resizeMode="cover"
              />
            </View>
          );
        }}
        onEndReached={() => loadMore()}
      />
    </View>
  );
}
