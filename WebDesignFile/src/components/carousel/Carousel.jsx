// import React from 'react'
import "./carousel.css";
import CarouselMain from "../../images/carousel-1.svg";
import CarouselImage2 from "../../images/grid-3.svg";

function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators d-flex w-auto justify-content-between">
        <p className="text-white">Özel Galerimiz</p>
        <div className="d-flex justify-content-center align-items-center">
          <div className="left-arrow-container" role="button">
            <i className="fa-solid fa-angle-left left-arrow"></i>
          </div>
          <i
            className="fa-thin fa-circle text-white"
            id="indicator-buttons-active"
          ></i>
          <i
            className="fa-thin fa-circle text-white"
            id="indicator-buttons"
          ></i>
          <i
            className="fa-thin fa-circle text-white"
            id="indicator-buttons"
          ></i>
          <i
            className="fa-thin fa-circle text-white"
            id="indicator-buttons"
          ></i>
          <i
            className="fa-thin fa-circle text-white"
            id="indicator-buttons"
          ></i>
          <i
            className="fa-thin fa-circle text-white"
            id="indicator-buttons"
          ></i>
          <div className="right-arrow-container" role="button">
            <i className="fa-solid fa-angle-right rigt-arrow"></i>
          </div>
        </div>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={CarouselMain} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-md-block">
            <h5>Yeni gelen sanat eserlerini inceleyin</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={CarouselImage2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-md-block">
            <h5>Galerimizi Ziyaret Edin</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

////İLK KOD///////

/**
 * function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active carousel-image-text-container">
          <img src={CarouselMain} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block caption-container">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="firstSlide-header">
                Yeni gelen sanat eserlerini inceleyin
              </div>
            </div>
            <div className="d-flex justify-content-between flex-row ">
              <div className="firstSlide-header-text">Özel Galerimiz</div>
              <div className="carousel-indicators d-block mx-0 position-static">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
 */
////////////////////
