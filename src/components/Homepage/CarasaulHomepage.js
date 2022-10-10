import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Homepage.module.css";
export default function PauseOnHover() {
  var settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="inner">
      <div className={style.container}>
        <Slider {...settings} className={style.slider}>
          <div className={style.one}>
            <div className={style.oneimg}>
              <img src="https://loremflickr.com/336/220/f" alt="" />
            </div>
          </div>
          <div className={style.two}>
            <div className={style.twoimg}>
              <img src="https://loremflickr.com/336/220/a" alt="" />
            </div>
          </div>
          <div className={style.three}>
            <div className={style.fiveimg}>
              <img src="https://loremflickr.com/336/220/b" alt="" />
            </div>
          </div>
          <div className={style.four}>
            <div className={style.threeimg}>
              <img src="https://loremflickr.com/336/220/wsd" alt="" />
            </div>
          </div>
          <div className={style.five}>
            <div className={style.fourimg}>
              <img src="https://loremflickr.com/336/220/fv" alt="" />
            </div>
          </div>
          <div className={style.six}>
            <div className={style.siximg}>
              <img src="https://loremflickr.com/336/220/fwer" alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
