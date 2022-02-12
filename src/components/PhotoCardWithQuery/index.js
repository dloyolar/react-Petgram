import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { gql, useQuery } from '@apollo/client';
import { PhotoLoader } from '../Loader';

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      id: id,
    },
  });

  if (error) return <h2>Internal Server Error</h2>;

  if (loading) return <PhotoLoader />;

  return <PhotoCard {...data.photo} />;
};
