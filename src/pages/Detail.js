import React from 'react';
import { useParams } from 'react-router-dom';
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery';

export const Detail = () => {
  const { id } = useParams();
  return <PhotoCardWithQuery id={id} />;
};
