import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Sidebar.module.css";
import { ReactComponent as Album } from "./album_3.svg";
import { ReactComponent as Music } from "./mymusiclogo.svg";
import { ReactComponent as Podcast } from "./podcast_4.svg";
export default function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className={style.all}>
      <div className={style.sidebar}>
        <Link
          to="/album"
          className={
            pathname === "/album"
              ? `${style.activelink} ${style.album}`
              : `${style.link}`
          }
        >
          <Album /> <br /> <p> Album</p>
        </Link>
        <Link
          to="/music"
          className={
            pathname === "/music"
              ? `${style.activelink} ${style.music}`
              : `${style.link}`
          }
        >
          <Music /> <br /> <p>Music</p>
        </Link>
        <Link
          to="/podcast"
          className={
            pathname === "/podcast"
              ? `${style.activelink} ${style.podcast}`
              : `${style.link}`
          }
        >
          <Podcast /> <br /> <p> Podcast</p>
        </Link>
        <Link
          to="/track"
          className={
            pathname === "/track"
              ? `${style.activelink} ${style.navlink}`
              : `${style.link}`
          }
        >
          NavLink
        </Link>
      </div>
    </div>
  );
}