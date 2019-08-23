import React from 'react';
import ApolloClient from 'apollo-boost'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'

import Router from './router'

const httpLink = createHttpLink({
    uri: 'http://localhost:9000',
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token')
    return {
        headers: {
            ...headers,
            'X-Auth-Token': token ? token : "",
        }
    }
})
console.log(authLink.concat(httpLink))

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
