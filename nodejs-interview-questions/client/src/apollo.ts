import { InMemoryCache, HttpLink, ApolloClient } from '@apollo/client';

const link = new HttpLink({ uri: '/graphql' });
const cache = new InMemoryCache();

export const apollo = new ApolloClient({ link, cache });
