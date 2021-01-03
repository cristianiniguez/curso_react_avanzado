import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { PhotoCard } from '../components/PhotoCard';

const getSinglePhotoQuery = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      userId
      likes
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { data, loading, error } = useQuery(getSinglePhotoQuery, { variables: { id } });

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Internal Server Error</h2>;

  return <PhotoCard {...data.photo} />;
};
