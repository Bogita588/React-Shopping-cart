import React, { useState } from "react";
import "./Hero.css";
import pampers1 from "./pampers1.png";
import pampers2 from "./pampers2.png";
import Pampers3 from "./Pampers3.png";

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(pampers1); // Initially selected image

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Welcome to Our Store</h2>
          <p>Discover the latest trends in fashion.</p>
          <button>Shop Now</button>
        </div>
        <div className="hero-image">
          <img src={selectedImage} alt="Hero" className="selected-image" />
        </div>
      </div>
      <div className="thumbnail-images">
        <img
          src={pampers1}
          alt="Thumbnail 1"
          onClick={() => handleImageClick(pampers1)}
        />
        <img
          src={pampers2}
          alt="Thumbnail 2"
          onClick={() => handleImageClick(pampers2)}
        />
        <img
          src={Pampers3}
          alt="Thumbnail 3"
          onClick={() => handleImageClick(Pampers3)}
        />
      </div>
    </section>
  );
};

export default Hero;
