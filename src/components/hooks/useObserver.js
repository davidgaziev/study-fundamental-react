import { useEffect, useRef } from 'react';

export const useObserver = (ref, isLoading, isEnd, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    var cb = function (entries) {
      if (entries[0].isIntersecting && isEnd) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
