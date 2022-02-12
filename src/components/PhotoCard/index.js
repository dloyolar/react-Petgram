import React from 'react';
import { Link } from 'react-router-dom';
import { useMutationToogleLike } from '../../hooks/useMutationToggleLike';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';

import { ImgWrapper, Img, Article } from './styles';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const [toggleLike] = useMutationToogleLike();

  const handleFavClick = () => {
    toggleLike({ variables: { input: { id: id } } });
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
