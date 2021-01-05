import React from 'react';
import { Link } from '@reach/router';

import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';
import { FavButton } from '../Favbutton';

import { useNearScreen } from '../../hooks/useNearScreen';
import { Article, ImgWrapper, Img } from './styles';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, liked }) => {
  const [shown, element] = useNearScreen();

  return (
    <Article ref={element}>
      {shown && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={''} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                toggleLike({ variables: { input: { id } } });
              };
              return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />;
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  );
};
