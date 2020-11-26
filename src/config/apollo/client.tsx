import {InMemoryCache, ApolloClient} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';

const cache = new InMemoryCache();

const reslink = new RestLink({
  uri: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key': '57282771-33c6-45e3-8282-28ac4972c92b',
  },
  responseTransformer: async (response) => {
    return response.json().then((result: any) => {
      return {result};
    });
  },
});

const client = new ApolloClient({
  link: reslink,
  cache: cache,
});

export default client;
