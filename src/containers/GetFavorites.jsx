import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { ListOfFavs } from '../components/ListOfFavs';

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading ...</p>;
  if (error) {
    console.error(error);
    return <p>Internal Server Error</p>;
  }

  const { favs } = data;

  return <ListOfFavs favs={favs} />;
};

const GetFavsQuery = ({ children }) => {
  const response = useQuery(GET_FAVS, { fetchPolicy: 'network-only' });
  return children(response);
};

export const FavsWithQuery = () => <GetFavsQuery>{renderProp}</GetFavsQuery>;
