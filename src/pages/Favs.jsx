import React from 'react';

import { Layout } from '../components/Layout';
import { FavsWithQuery } from '../containers/GetFavorites';

export const Favs = () => (
  <Layout title='Tus fotos favoritas' subtitle='Aquí puedes encontrar tus fotos favoritas'>
    <FavsWithQuery />
  </Layout>
);
