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
            <h2>Tri-Pod</h2>
            <h3>Helps reduce camera shake and allows longer shutter speeds</h3>
          </div>
          <div className="slider__container-text">
            <h2>Extra Memory Cards</h2>
            <h3>You will always take more pictures than you think</h3>
          </div>
          <div className="slider__container-text">
            <h2>Spare Camera Battery</h2>
            <h3>Cold conditions batterys do not last as long</h3>
          </div>
          <div className="slider__container-text">
            <h2>Dust Blower</h2>
            <h3>Try to avoid touching the glass of the lens to get bits of dust off</h3>
          </div>
          <div className="slider__container-text">
            <h2>White Balance Cards</h2>
            <h3>This can help with crisp colors when on location</h3>
          </div>
          <div className="slider__container-text">
            <h2>Waterproofs</h2>
            <h3>Dont let the rain stop the shoot</h3>
          </div>
          <div className="slider__container-text">
            <h2>Range of lenses 35mm-500mm</h2>
            <h3>Try different focal lengths it will make a massive difference</h3>
          </div>
        </Slider>
      </section>
      <section className="slider__container-right">
        <div className="slider__container-title">Settings</div>
        <Slider {...settings}>
          <div className="slider__container-text">
            <h2>Natural Daylight</h2>
            <h3>This will help with bold colors and crisp images</h3>
          </div>
          <div className="slider__container-text">
            <h2>Low ISO</h2>
            <h3>This will help you use a high shutter speed in sunny conditions</h3>
          </div>
          <div className="slider__container-text">
            <h2>High Shutter Speed</h2>
            <h3>Will assist with crisp sharp images to maximise detail</h3>
          </div>
          <div className="slider__container-text">
            <h2>Low Aperture</h2>
            <h3>Will allow lots of light into the camera and give you a nice background blur known as Bokeh</h3>
          </div>
          <div className="slider__container-text">
            <h2>Stabilisation On</h2>
            <h3>This helps remove camera shake for sharp images</h3>
          </div>
          <div className="slider__container-text">
            <h2>Auto Focus</h2>
            <h3>If its a still object use single focus if it moving use continuos focus</h3>
          </div>
          <div className="slider__container-text">
            <h2>Multi Metering Mode</h2>
            <h3>Splits the scene into grids, each grid is analysed to determine the highlight and shadow detail.Then calculates an average on which the recommended exposure is based.</h3>
          </div>
        </Slider>
      </section>
    </section>
  );
};

export default SimpleSlider;
