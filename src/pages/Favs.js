import React from 'react';
import { ListOfFavs } from '../components/ListOfFavs';
import { PhotoLoader } from '../components/Loader';
import { useGetFavorites } from '../hooks/useGetFavorites';

export const Favs = () => {
  const { loading, error, data } = useGetFavorites();

  if (loading) return <PhotoLoader />;
  if (error) return <p>Error to load data...</p>;

  const { favs } = data;

  return (
    <>
      <h1>Favorites</h1>
      <ListOfFavs favs={favs} />
    </>
  );
};
