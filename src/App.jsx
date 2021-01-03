import React from 'react';
import { Router } from '@reach/router';

import { GlobalStyles } from './styles/GlobalStyles';
import { Logo } from './components/Logo';

import { Home } from './pages/Home';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <div>
      <GlobalStyles />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path='/' />
          <Home path='/pet/:id' />
        </Router>
      )}
    </div>
  );
};
