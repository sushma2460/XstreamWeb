import React from 'react';

const CarouselControls = ({ onPrevClick, onNextClick }) => {
  return (
    <>
      <button className="carousel-control prev" onClick={onPrevClick}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={onNextClick}>
        &#10095;
      </button>
    </>
  );
};

export default CarouselControls;