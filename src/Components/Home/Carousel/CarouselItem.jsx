import React from 'react';

const CarouselItem = ({ slide, isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <img src={slide.image} alt={slide.title} />
      <div className="carousel-content">
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
      </div>
    </div>
  );
};

export default CarouselItem;