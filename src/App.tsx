import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import NavigationRoute from './config/route';
import {ApolloProvider} from '@apollo/client';

import client from './config/apollo/client';

const App = () => {
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
