import React from "react";
import CarasaulHomepage from "./CarasaulHomepage";
import RecommendateSongs from "./RecommendateSongs";
import style from "./Homepage.module.css";
export default function Homepage() {
  return (
    <div className={style.homepage}>
      <CarasaulHomepage />
      <h1>Recommended songs</h1>
      <RecommendateSongs />
      <h1>Saved songs</h1>
      <RecommendateSongs />
      <h1>Saved Albums</h1>
      <RecommendateSongs />
      <h1>Your Playlist</h1>
      <RecommendateSongs />
      <h1>Your Artist</h1>
      <RecommendateSongs />
      <h1>Hello</h1>
    </div>
  );
}
