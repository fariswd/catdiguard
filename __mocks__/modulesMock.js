import 'react-native';

jest.mock('react-native-gesture-handler', () => jest.fn());
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(),
}));
jest.mock('apollo-link-rest', () => ({
  RestLink: jest.fn(),
}));
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
}));
jest.mock('@apollo/client', () => {
  const useReactiveVar = jest.fn();
  return {
    InMemoryCache: jest.fn(),
    ApolloClient: jest.fn(),
    makeVar: jest.fn(),
    gql: jest.fn(),
    useReactiveVar: useReactiveVar,
  };
});
jest.mock('react-native-share', () => ({
  open: jest.fn(),
}));
jest.mock('react-native-view-shot', () => ({
  captureRef: jest.fn(),
}));
jest.mock('react-native-fast-image');
