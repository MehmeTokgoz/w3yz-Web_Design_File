// import React from 'react'
import "./carousel.css";
import CarouselMain from "../../images/carousel-1.svg";
import CarouselImage2 from "../../images/grid-3.svg";
import CarouselImage3 from "../../images/grid-8.svg";
import { useState } from "react";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + 2) % 3);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % 3);
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators d-flex w-auto justify-content-between">
        <p className="text-white">Özel Galerimiz</p>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="left-arrow-container"
            role="button"
            onClick={handlePrev}
          >
            <i className="fa-solid fa-angle-left left-arrow"></i>
          </div>
          {[...Array(2)].map((_, index) => (
            <i
              key={index}
              className={`fa-thin fa-circle text-white indicator-buttons-${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              id="indicator-button-0"
            ></i>
          ))}

          <i
            className="fa-thin fa-circle text-white indicator-buttons" id= "indicator-button-1"
          ></i>
          <i
            className="fa-thin fa-circle text-white indicator-buttons"
            id= "indicator-button-2"
          ></i>
          <i
            className="fa-thin fa-circle text-white indicator-buttons"
            id= "indicator-button-3"
          
          ></i>
          <i
            className="fa-thin fa-circle text-white indicator-buttons"
            id= "indicator-button-4"
          
          ></i>
          <i
            className="fa-thin fa-circle text-white indicator-buttons"
            id= "indicator-button-4"
          
          ></i>
          <i
            className="fa-thin fa-circle text-white indicator-buttons"
            id= "indicator-button-5"
          
          ></i>

          <div
            className="right-arrow-container"
            role="button"
            onClick={handleNext}
          >
            <i className="fa-solid fa-angle-right rigt-arrow"></i>
          </div>
        </div>
      </div>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
          <img src={CarouselMain} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-md-block">
            <h5>Yeni gelen sanat eserlerini inceleyin</h5>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
          <img src={CarouselImage2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-md-block">
            <h5>En Beğenilen Sanat Eserleri</h5>
          </div>
        </div>

        <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
          <img src={CarouselImage3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-md-block">
            <h5>Mutlaka Görülmesi Gerekenler</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

