import React, { useState, useEffect, useRef } from 'react';
import { Article, ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [shown, setShown] = useState(false);
  const art = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      console.log({ isIntersecting });
      if (isIntersecting) {
        console.log('si');
        setShown(true);
        observer.disconnect();
      }
    });
    observer.observe(art.current);
  }, [art]);

  return (
    <Article ref={art}>
      {shown && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={''} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
