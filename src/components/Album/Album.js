import React from "react";
import style from "./Album.module.css";
import RecommendateAlbum from "./RecommendateAlbum";
export default function Album() {
  return (
    <div>
      <div className={style.homepage}>
        <h1>Recommended Album</h1>
        <RecommendateAlbum />
        <h1>Saved Album</h1>
        <RecommendateAlbum />
        <h1>Newly fresh Albums</h1>
        <RecommendateAlbum />
        <h1>Your Playlist</h1>
        <RecommendateAlbum />
        <h1>Hello</h1>
      </div>
    </div>
  );
}
