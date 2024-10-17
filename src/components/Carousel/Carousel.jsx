import React, { useState, useEffect } from "react";
import "./CarouselStyles.scss";

const Carousel = ({ children }) => {
  const itemsPerPage = 4;  // Display 4 items at a time
  const totalItems = React.Children.count(children); // Get total number of children
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < totalItems ? prevIndex + itemsPerPage : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-btn prev-btn">
        &#10094; Previous
      </button>
      <div className="carousel-content">
        <div
          className="carousel-items"
          style={{
            transform: `translateX(-${(currentIndex / totalItems) * 100}%)`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div key={index} className="carousel-item">
              {child}
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextSlide} className="carousel-btn next-btn">
        Next &#10095;
      </button>
    </div>
  );
};

export default Carousel;
