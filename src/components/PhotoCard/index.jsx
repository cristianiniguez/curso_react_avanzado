import React from 'react';
import { Link } from '@reach/router';
import { gql, useMutation } from '@apollo/client';

import { FavButton } from '../Favbutton';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { Article, ImgWrapper, Img } from './styles';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`;

  const [liked, setLiked] = useLocalStorage(key, false);
  const [shown, element] = useNearScreen();
  const [toggleLike] = useMutation(LIKE_PHOTO);

  const handleFavClick = () => {
    !liked && toggleLike({ variables: { input: { id } } });
    setLiked(!liked);
  };

  return (
    <Article ref={element}>
      {shown && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={''} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
