import { useState, useEffect } from 'react';
import './Carousel.css';
import CarouselItem from './CarouselItem';
import CarouselControls from './CarouselControls';
import { carouselData } from './CarouselData';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carouselData.length;

  const nextSlide = () => {
    setCurrentSlide(current => (current === totalSlides - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? totalSlides - 1 : current - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {carouselData.map((slide, index) => (
          <CarouselItem 
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
          />
        ))}
      </div>
      <CarouselControls 
        onPrevClick={prevSlide}
        onNextClick={nextSlide}
      />
    </div>
  );
}

export default Carousel;