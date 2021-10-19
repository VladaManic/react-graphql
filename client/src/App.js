import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <h1>Space X</h1>
        </div>
        <Route exact path="/">
          <Launches/>
        </Route>
        <Route exact path="/launch/:flight_number">
          <Launch/>
        </Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
