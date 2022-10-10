import React from "react";
import Slider from "react-slick";
import style from "./Album.module.css";
export default function RecommendateAlbum() {
  var settings = {
    dots: false,
    centerMode: true,
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
          <div className={style.flex}>
            <div className={style.box}>
              <div className={style.img}></div>
              <div className={style.name}>
                <h1>ABCD</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={style.two}>
          <div className={style.flex}>
            <div className={style.box}>
              <div className={style.img}></div>
              <div className={style.name}>
                <h1>ABCD</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={style.three}>
          <div className={style.flex}>
            <div className={style.box}>
              <div className={style.img}></div>
              <div className={style.name}>
                <h1>ABCD</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={style.four}>
          <div className={style.flex}>
            <div className={style.box}>
              <div className={style.img}></div>
              <div className={style.name}>
                <h1>ABCD</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={style.five}>
          <div className={style.flex}>
            <div className={style.box}>
              <div className={style.img}></div>
              <div className={style.name}>
                <h1>ABCD</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={style.six}>
          <div className={style.flex}>
            <div className={style.box}>
              <div className={style.img}></div>
              <div className={style.name}>
                <h1>ABCD</h1>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
