import React from "react";
import style from "./Music.module.css";
import RecommendateMusic from "./RecommendateMusic";
export default function Music() {
  return (
    <div>
      <div className={style.homepage}>
        <h1>Recommended Music</h1>
        <RecommendateMusic />
        <h1>Saved Music</h1>
        <RecommendateMusic />
        <h1>Newly fresh Music</h1>
        <RecommendateMusic />
        <h1>Your Music</h1>
        <RecommendateMusic />
        <h1>Music</h1>
      </div>
    </div>
  );
}
