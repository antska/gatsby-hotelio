import React from 'react';

const ScrollButton = () => {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  return (
    <div className="scrolltop-wrap">
      <div className="cursor-pointer" onClick={() => scrollToTop()}>
        <svg
          className="h-full w-full block"
          height="48"
          width="48"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#a7a5a5"
            className="opacity-25 hover:opacity-75 transform transition-all duration-100"
            d="M0 0h48v48h-48z"
          ></path>
          <path
            fill="#ffffff"
            className="transform origin-center scale-75"
            d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ScrollButton;
