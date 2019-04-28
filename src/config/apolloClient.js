import ApolloClient from 'apollo-boost';

export const apolloClient = new ApolloClient({
  uri: 'https://api.yelp.com/v3/graphql',
  headers: {
    'accept-language': 'tr_TR',
    authorization: 'Bearer t9uA3FNAHNJHfZeEEFeMmxPgcEVL5HhpMdohdhMWBxlazea-AZJLjsTVYUJNS8WZdZLe-eiAVV6cToNDOuODuxkrnL3aqrRiZTxnTJT3Fq_8oWQvD113P8tlwALDXHYx',
  },
});
