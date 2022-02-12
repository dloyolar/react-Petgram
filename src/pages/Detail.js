import React from 'react';
import { useParams } from 'react-router-dom';
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery';

import { Helmet } from 'react-helmet';

export const Detail = () => {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>Petgram - Details 🐶</title>
        <meta name="description" content="An image of specific pet" />
      </Helmet>
      <PhotoCardWithQuery id={id} />
    </>
  );
};
