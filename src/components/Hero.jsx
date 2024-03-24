import React, { useState, useEffect } from "react";
import "./Hero.css";
import pampers1 from "./pampers1.png";
import pampers2 from "./pampers2.png";
import Pampers3 from "./Pampers3.png";

const Hero = () => {
  const [images, setImages] = useState([pampers1, pampers2, Pampers3]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Welcome to Our Store</h2>
          <p>Discover the latest trends in fashion.</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="hero-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`img ${index + 1}`}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
