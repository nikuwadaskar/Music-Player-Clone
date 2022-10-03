import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Menu } from "./menu.svg";
import { ReactComponent as X } from "./x.svg";
import "./Navbar.css";
export default function Navbar() {
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
        <div className="menu">
          <Menu />
        </div>
        <div className="input">
          <input type="text" placeholder="Search Your Favourite Music" />
          <button className="red">Search</button>
        </div>
      </div>
      <div className="dropdown">
      <div className="dropdown-links">
          <Link to="/Hellji" className="link">
            Home
          </Link>
          {/* <hr /> */}
          <Link to="/Hellji" className="link">
            Home
          </Link>
          {/* <hr /> */}
          <Link to="/Hellji" className="link">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
