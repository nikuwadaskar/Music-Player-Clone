import React from "react";
import style from "./Music.module.css";
import Slider from "react-slick";
export default function RecommendateAlbum() {
  var settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    // autoplaySpeed: 2000,
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
          initialSlide: 1,
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
  );
}
