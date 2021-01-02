import React, { useState, useEffect, useRef } from 'react';
import { Article, ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`;

  const art = useRef(null);
  const [shown, setShown] = useState(false);
  const [liked, setLiked] = useState(() => {
    try {
      const like = localStorage.getItem(key);
      return like;
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer'),
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      });
      observer.observe(art.current);
    });
  }, [art]);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, value);
      setLiked(value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Article ref={art}>
      {shown && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={''} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size='32px' />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
