import React, { useState } from "react";
import { services } from "../constants";

const SkillCarousel = () => {
  const [index, setIndex] = useState(0);
  
  const prevSlide = () => setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));


  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
          {services.map((service) => (
            <div
              key={service.id}
              className="carousel-slide bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-base">{service.description}</p>
              <img src={service.img} alt="" />
            </div>
          ))}
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
      <button className="carousel-btn next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default SkillCarousel;