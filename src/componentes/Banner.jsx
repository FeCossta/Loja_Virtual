import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
  const images = [
    'https://testifying-f06x3woeo-fe-costa.vercel.app/assets/banner/b1.jpg',
    'https://testifying-f06x3woeo-fe-costa.vercel.app/assets/banner/b2.jpg',
    'https://testifying-f06x3woeo-fe-costa.vercel.app/assets/banner/b4.jpg',
    'https://testifying-f06x3woeo-fe-costa.vercel.app/assets/banner/b5.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="banner">
  {images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt="Banner"
      style={{ opacity: currentImageIndex === index ? 1 : 0 }}
    />
  ))}

      
      <button onClick={goToPreviousImage} name='Left Button' aria-label="Voltar" className="leftButton">
        
      </button>
      <button onClick={goToNextImage} name='Right Button' aria-label="Avançar" className="rightButton">
        
      </button>
    </div>
  );
}

export default Banner;
