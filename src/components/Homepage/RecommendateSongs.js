import React from "react";
import Slider from "react-slick";
import style from "./Homepage.module.css";
export default function RecommendateSongs() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={style.new}>
      <Slider {...settings}>
        <div className={style.one}>
          <div className={style.siximg}>
            <img src="https://loremflickr.com/336/220/m" alt="" />
          </div>
        </div>
        <div className={style.two}>
          <div className={style.siximg}>
            <img src="https://loremflickr.com/336/220/p" alt="" />
          </div>
        </div>
        <div className={style.three}>
          <div className={style.siximg}>
            <img src="https://loremflickr.com/336/220/ert" alt="" />
          </div>
        </div>
        <div className={style.four}>
          <div className={style.siximg}>
            <img src="https://loremflickr.com/336/220/trh" alt="" />
          </div>
        </div>
        <div className={style.five}>
          <div className={style.siximg}>
            <img src="https://loremflickr.com/336/220/er" alt="" />
          </div>
        </div>
        <div className={style.six}>
          <div className={style.siximg}>
            <img src="https://loremflickr.com/336/220/r" alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
}
