import React from 'react';

import { Layout } from '../components/Layout';
import { FavsWithQuery } from '../containers/GetFavorites';

export default () => (
  <Layout title='Tus fotos favoritas' subtitle='Aquí puedes encontrar tus fotos favoritas'>
    <FavsWithQuery />
  </Layout>
);
