import React from 'react';
import ApolloClient, { gql } from 'apollo-boost'
// import { useQuery } from '@apollo/react-hooks'
// // import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'

import Router from './router'

const client = new ApolloClient({
  uri: 'http://localhost:9000/',
 // cache: new InMemoryCache()
})

// function Viewer() {
//   const { loading, error, data } = useQuery(gql`
//     {
//       viewer{
//         name
//         posts {
//           id
//           author {
//             name
//           }
//           title
//           description
//         }
//       }
//     }
//   `);
//
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
//
//   return data.viewer ? (<div>{data.viewer.name}</div>) : (<div>Not login</div>)
// }


function App() {
  return (
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
  );
}

export default App;
