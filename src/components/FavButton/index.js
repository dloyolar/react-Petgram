import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { LikeIcon, Button } from './styles';

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? LikeIcon : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="24px" />
      {likes} likes!
    </Button>
  );
};
