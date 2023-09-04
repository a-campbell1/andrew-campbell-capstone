import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="slider__container">
      <section className="slider__container-left">
        <div className="slider__container-title">Hardware</div>
        <Slider {...settings}>
          <div className="slider__container-text">
            <h3>Tri-Pod</h3>
          </div>
          <div className="slider__container-text">
            <h3>Extra Memory Cards</h3>
          </div>
          <div className="slider__container-text">
            <h3>Spare Camera Battery</h3>
          </div>
          <div className="slider__container-text">
            <h3>Dust Blower</h3>
          </div>
          <div className="slider__container-text">
            <h3>White Balance Cards</h3>
          </div>
          <div className="slider__container-text">
            <h3>Waterproofs</h3>
          </div>
          <div className="slider__container-text">
            <h3>Range of lenses 35mm-200mm</h3>
          </div>
        </Slider>
      </section>
      <section className="slider__container-right">
        <div className="slider__container-title">Settings</div>
        <Slider {...settings}>
          <div className="slider__container-text">
            <h3>Natural Daylight</h3>
          </div>
          <div className="slider__container-text">
            <h3>Low ISO</h3>
          </div>
          <div className="slider__container-text">
            <h3>High Shutter Speed</h3>
          </div>
          <div className="slider__container-text">
            <h3>Low Aperture</h3>
          </div>
          <div className="slider__container-text">
            <h3>Stabilisation On</h3>
          </div>
          <div className="slider__container-text">
            <h3>Auto Focus</h3>
          </div>
          <div className="slider__container-text">
            <h3>Multi Metering Mode</h3>
          </div>
        </Slider>
      </section>
    </section>
  );
};

export default SimpleSlider;
