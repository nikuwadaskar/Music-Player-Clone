import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Menu } from "./menu.svg";
import { ReactComponent as X } from "./x.svg";
import "./Navbar.css";
export default function Navbar() {
  // const [size, setSize] = useState(0);

  function handlemenu() {
    const clas = document.getElementById("menu").getAttribute("class");
    if (!clas.includes("none")) {
      document.getElementById("menu").setAttribute("class", "none");
      document.getElementById("x").setAttribute("class", "menu");
      document
        .getElementById("dropdown")
        .setAttribute("class", "dropdown dropdown-links");
    } else {
      document.getElementById("menu").setAttribute("class", "menu");
      document.getElementById("x").setAttribute("class", "none");
      document.getElementById("dropdown").setAttribute("class", "none");
    }
  }

  return (
    <>
      <div className="nav">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <div className="links">
          <Link to="/Hellji" className="link">
            Home
          </Link>
          <hr />
          <Link to="/Hellji" className="link">
            Home
          </Link>
          <hr />
          <Link to="/Hellji" className="link">
            Home
          </Link>
        </div>
        <div className="menu" id="menu" onClick={handlemenu}>
          <Menu />
        </div>
        <div className="menu none" id="x" onClick={handlemenu}>
          <X />
        </div>
        <div className="input">
          <input type="text" placeholder="Search Your Favourite Music" />
          <button className="red">Search</button>
        </div>
      </div>
      <div id="dropdown" className="dropdown none dropdown-links">
        <Link to="/Hellji" className="link">
          Home
        </Link>
        <Link to="/Hellji" className="link">
          Home
        </Link>
        <Link to="/Hellji" className="link">
          Home
        </Link>
      </div>
    </>
  );
}
