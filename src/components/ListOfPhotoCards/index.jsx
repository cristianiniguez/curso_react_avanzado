import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { PhotoCard } from '../PhotoCard';

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(withPhotos);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Internal Server Error</h2>;

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
