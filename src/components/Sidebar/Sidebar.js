import React from "react";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.css";
import { ReactComponent as Album } from "./album_3.svg";
import { ReactComponent as Music } from "./mymusiclogo.svg";
import { ReactComponent as Podcast } from "./podcast_4.svg";
export default function Sidebar() {
  return (
    <div className={style.all}>
      <div className={style.sidebar}>
        <Link to="/" className={style.link}>
          
          <Album /> <br /> <p> Album</p>
        </Link>
        <Link to="/" className={style.link}>
          <Music /> <br /> <p>Music</p>
        </Link>
        <Link to="/" className={style.link}>
          <Podcast /> <br /> <p> Podcast</p>
        </Link>
        <Link to="/" className={style.link}>
          NavLink
        </Link>
      </div>
    </div>
  );
}
