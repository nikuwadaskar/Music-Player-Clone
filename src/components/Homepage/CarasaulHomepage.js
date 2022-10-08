import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Homepage.module.css";
export default function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="inner">
      <div className={style.container}>
        <Slider {...settings} className={style.slider}>
          <div className={style.one}>
            <h3>1</h3>
          </div>
          <div className={style.two}>
            <h3>2</h3>
          </div>
          <div className={style.three}>
            <h3>3</h3>
          </div>
          <div className={style.four}>
            <h3>4</h3>
          </div>
          <div className={style.five}>
            <h3>5</h3>
          </div>
          <div className={style.six}>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
