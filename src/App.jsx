import React from 'react';

import { GlobalStyles } from './GlobalStyles';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';

export const App = () => (
  <div>
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
);
