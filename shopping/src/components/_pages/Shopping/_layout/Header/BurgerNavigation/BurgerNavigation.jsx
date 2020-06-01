import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./burger-navigation.scss";

const getTime = (i) => {
  return i / 7 + 0.4;
};

const BurgerNavigation = (props) => {
  const [toogle, setToogle] = useState(false);
  return (
    <div
      onClick={() => setToogle(!toogle)}
      className={toogle ? "burger-menu toggle" : "burger-menu"}
    >
      <nav className="nav">
        <ul className={toogle ? "nav-links nav-active" : "nav-links"}>
          <li
            className="nav-item"
            style={{
              animation: toogle
                ? `navLinkanimate 0.5s ease forwards ${getTime(1)}s`
                : "",
            }}
          >
            <Link to="/">HOME</Link>
          </li>
          <li
            className="nav-item"
            style={{
              animation: toogle
                ? `navLinkanimate 0.5s ease forwards ${getTime(2)}s`
                : "",
            }}
          >
            <Link to="/about">ABOUT</Link>
          </li>
          <li
            className="nav-item"
            style={{
              animation: toogle
                ? `navLinkanimate 0.5s ease forwards ${getTime(3)}s`
                : "",
            }}
          >
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default BurgerNavigation;
