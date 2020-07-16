import { useState, useEffect } from 'react';

export default (ref, threshold = 0.25) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.boundingClientRect.y < 0) {
            setIntersecting(true);
            observer.unobserve(element);
          }
        }),
      {
        threshold
      }
    );
    if (element) {
      observer.observe(element);
    }
    return () => {
      observer.unobserve(element);
    };
  }, [ref, threshold]);
  return isIntersecting;
};
