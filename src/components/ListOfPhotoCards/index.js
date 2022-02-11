import React from 'react';

import { PhotoCard } from '../PhotoCard';
import { useGetPhotos } from '../../hooks/useGetPhotos';
import { PhotoLoader } from '../Loader';
import { useParams } from 'react-router-dom';

export const ListOfPhotoCards = () => {
  const { id } = useParams();
  const { loading, error, data } = useGetPhotos(id);

  if (loading) return <PhotoLoader />;

  if (error) return <p>Error to get data</p>;

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
