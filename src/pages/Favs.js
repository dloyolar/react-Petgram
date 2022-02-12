import React from 'react';
import { ListOfFavs } from '../components/ListOfFavs';
import { PhotoLoader } from '../components/Loader';
import { useGetFavorites } from '../hooks/useGetFavorites';

import { Helmet } from 'react-helmet';

export const Favs = () => {
  const { loading, error, data } = useGetFavorites();

  if (loading) return <PhotoLoader />;
  if (error) return <p>Error to load data...</p>;

  const { favs } = data;

  return (
    <>
      <Helmet>
        <title>Petgram - Favorites ⭐</title>
        <meta
          name="description"
          content="Here you can find your favorite pets 🐶"
        />
      </Helmet>
      <h1>Favorites</h1>
      <ListOfFavs favs={favs} />
    </>
  );
};
