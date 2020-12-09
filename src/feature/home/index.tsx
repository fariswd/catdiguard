import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {gql} from '@apollo/client';
import client from '../../config/apollo/client';
import {FlatList} from 'react-native-gesture-handler';
import MediaContainer from '../../components/MediaContainer';

const GET_CAT = gql`
  query GET_CAT {
    cat(page: $page)
      @rest(type: CatResult, path: "images/search?limit=10", method: "GET") {
      result {
        url
        id
      }
    }
  }
`;

type Props = {
  navigation: any;
};

export default function HomeScreen({navigation}: Props) {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);

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
        renderItem={(renderItem: any) => (
          <MediaContainer {...renderItem} navigation={navigation} />
        )}
        onEndReached={() => loadMore()}
      />
    </View>
  );
}
