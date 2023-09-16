import React, { useState, useEffect } from 'react';

const images = [
  'image1.jpeg',
  'image2.jpg',
  'image4.jpeg',
  // Add more image paths
];

function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slideshow">
      <img
        src={images[currentImageIndex]}
        alt={`Slideshow ${currentImageIndex + 1}`}
      />
    </div>
  );
}

export default Slideshow;
