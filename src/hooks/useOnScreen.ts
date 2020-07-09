import { useState, useEffect } from 'react';

export default (ref, threshold = 0.25) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    let prevBounding = 0;

    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          const isAbove = entry.boundingClientRect.y > prevBounding;

          if (entry.isIntersecting) {
            if (!isAbove) {
              setIntersecting(true);
            } else {
              setIntersecting(false);
            }
          }
          if (isAbove) {
            setIntersecting(false);
          }
          prevBounding = entry.boundingClientRect.y;
        }),
      {
        threshold
      }
    );
    if (element) {
      setTimeout(() => observer.observe(element), 3500);
    }
    return () => {
      observer.unobserve(element);
    };
  }, [ref, threshold]);
  return isIntersecting;
};
