import { useState, useEffect, useRef } from 'react';

export function useNearScreen() {
  const element = useRef(null);
  const [shown, setShown] = useState(false);

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
      observer.observe(element.current);
    });
  }, [element]);

  return [shown, element];
}
