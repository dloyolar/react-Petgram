import React from 'react';

import { useQuery, gql } from '@apollo/client';

import { PhotoCard } from '../PhotoCard';

const getPhotos = gql`
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
  const { loading, error, data } = useQuery(getPhotos);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error to get data</p>;

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
