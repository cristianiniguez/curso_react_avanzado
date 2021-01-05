import React from 'react';

import { Layout } from '../components/Layout';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';

export const Detail = ({ id }) => {
  return (
    <Layout title={`Foto ${id}`}>
      <PhotoCardWithQuery id={id} />
    </Layout>
  );
};
