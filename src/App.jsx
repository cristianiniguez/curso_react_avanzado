import React from 'react';

import { GlobalStyles } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';

export const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
);
