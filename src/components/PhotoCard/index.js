import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useMutationToogleLike } from '../../hooks/useMutationToggleLike';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';

import { ImgWrapper, Img, Article } from './styles';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [toggleLike] = useMutationToogleLike();

  const handleFavClick = () => {
    !liked && toggleLike({ variables: { input: { id: id } } });
    setLiked(!liked);
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
