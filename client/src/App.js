import React from 'react';
import ApolloClient from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { HttpLink, ApolloLink, InMemoryCache } from 'apollo-boost'

import Router from './router'

const httpLink = new HttpLink({ uri: 'http://localhost:9000' })

const authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem('token');

    operation.setContext({
        headers: {
            'x-auth-token': token ? token : ''
        }
    });
    return forward(operation);
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})


function App() {
  return (
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
  );
}

export default App;
