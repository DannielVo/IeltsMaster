import React from "react";
import "./header.css";
import { assets } from "../../assets/asset";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="nav-left">
          <a href="home.html" className="logo">
            <img src={assets.logo} alt="Logo" />
          </a>
        </div>

        <div className="nav-right">
          <a href="#">Flashcards</a>
          <a href="#">Academic</a>
          <a href="#">General</a>
          <a href="#">Sign in</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
