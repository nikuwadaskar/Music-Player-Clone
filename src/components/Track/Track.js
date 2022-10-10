import React from "react";
import style from "./Track.module.css";
export default function Track() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9];

  const renderList = arr.map((e) => {
    return (
      <div className={`${style.queuesong} ${style.one} ${style.center}`}>
        <div className={style.queuesongleft}>
          <div className={style.songnumber}>01</div>
          <img src="https://loremflickr.com/336/220/song" alt="" />
          <div className={style.songname}>
            <h4>Careless Whisper</h4>
            <p>George Michael</p>
          </div>
        </div>
        <div className={style.queuesongright}>
          <div className={style.queuesongright}>
            <i className="fas fa-heart"></i> &nbsp &nbsp &nbsp{" "}
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className={style.upper}>
        <div className={style.img}>
          <img src="https://loremflickr.com/336/220/artist" alt="" />
        </div>
        <div className={style.info}>
          <h4 className={style.tag}>#single</h4>
          <h1>Helloji here i am</h1>
          <h2>hhcdshcih</h2>
          <p>incdoncposdcdcsdcwdcwdcwdcdwc</p>
          <button>Play me asshole</button>
        </div>
      </div>
      <div className={style.lower}>
        <h1>Similar songs</h1>
        <ol>{renderList}</ol>
      </div>
    </div>
  );
}
