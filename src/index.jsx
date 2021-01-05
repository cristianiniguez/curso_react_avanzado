import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import Context from './Context';
import { App } from './App';

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token');

  if (token) {
    operation.setContext({
      headers: { authorization: `Bearer ${token}` },
    });
  }

  return forward(operation);
});

const errorMiddleware = onError(({ networkError }) => {
  console.log(networkError);
  if (networkError && networkError.result.code === 'invalid_token') {
    sessionStorage.removeItem('token');
    window.location = '/user';
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-criniguez.vercel.app/graphql',
    }),
  ]),
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'),
);
