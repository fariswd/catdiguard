import {InMemoryCache, makeVar} from '@apollo/client'

type Item = {
  id: string;
  url: string;
};
export const catListVar = makeVar<Item[]>([]);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        catList: {
          read(){
            return catListVar()
          }
        }
      }
    }
  }
})
