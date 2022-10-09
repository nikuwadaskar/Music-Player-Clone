import React, { Component } from "react";
import Slider from "react-slick";

import style from "./Podcast.module.css";
export default function RecommendatePodcast() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className={style.new}>
      <h2> Multiple items </h2>
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
