import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Menu } from "./menu.svg";
import { ReactComponent as X } from "./x.svg";
import style from "./Navbar.module.css";
export default function Navbar() {
  // const [size, setSize] = useState(0);

  function handlemenu() {
    const clas = document.getElementById("menu").getAttribute("class");
    if (!clas.includes("none")) {
      document.getElementById("menu").setAttribute("class", style.none);
      document.getElementById("x").setAttribute("class", style.menu);
      document
        .getElementById("dropdown")
        .setAttribute("class", `${style.dropdown} ${style.dropdownlinks}`);
    } else {
      document.getElementById("menu").setAttribute("class", style.menu);
      document.getElementById("x").setAttribute("class", style.none);
      document.getElementById("dropdown").setAttribute("class", style.none);
    }
  }

  return (
    <>
      <div className={style.nav}>
        <Link to="/">
          <Logo className={style.logo} />
        </Link>
        <div className={style.links}>
          <Link to="/Hellji" className={style.link}>
            Home
          </Link>
          <hr />
          <Link to="/Hellji" className={style.link}>
            Home
          </Link>
          <hr />
          <Link to="/Hellji" className={style.link}>
            Home
          </Link>
        </div>
        <div className={style.menu} id="menu" onClick={handlemenu}>
          <Menu />
        </div>
        <div
          className={`${style.menu} ${style.none}`}
          id="x"
          onClick={handlemenu}
        >
          <X />
        </div>
        <div className={style.input}>
          <input type="text" placeholder="Search Your Favourite Music" />
          <button>Search</button>
        </div>
      </div>
      <div
        id="dropdown"
        className={`${style.dropdown} ${style.none} ${style.dropdownlinks}`}
      >
        <Link to="/Hellji" className={style.link}>
          Home
        </Link>
        <Link to="/Hellji" className={style.link}>
          Home
        </Link>
        <Link to="/Hellji" className={style.link}>
          Home
        </Link>
      </div>
    </>
  );
}
