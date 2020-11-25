import {InMemoryCache, ApolloClient} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';

const reslink = new RestLink({
  uri: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key': '__your_api_key__'
  },
  responseTransformer: async response => {
    return response.json().then((result:any) => {
    return {result}
  })},
});

const client = new ApolloClient({
  link: reslink,
  cache: new InMemoryCache(),
});

export default client;
