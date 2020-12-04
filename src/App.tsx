import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import NavigationRoute from './config/route';
import {ApolloProvider} from '@apollo/client';

import client from './config/apollo/client';
import {catListVar} from './config/apollo/cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const readAsyncStorage = async () => {
      const value = await AsyncStorage.getItem('CAT_LIST');
      if (value !== null) {
        catListVar(JSON.parse(value));
      }
      setReady(true);
    };
    try {
      readAsyncStorage();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!ready) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ApolloProvider client={client}>
        <NavigationRoute />
      </ApolloProvider>
    </>
  );
};

export default App;
