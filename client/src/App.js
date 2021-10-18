import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Space X</h1>
      </div>
      <Launches/>
    </ApolloProvider>
  );
}

export default App;
