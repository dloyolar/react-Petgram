import React from 'react';
import { useParams } from 'react-router-dom';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';

import { Helmet } from 'react-helmet';

export const Home = React.memo(() => {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>Petgram - a social network for your pets</title>
        <meta
          name="description"
          content="With petgram you can find pet photos 👌"
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  );
});
