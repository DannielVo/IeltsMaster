import React from "react";
import "./header.css";
import { assets } from "../../assets/asset";
import useMobileNav from "../../hooks/useMobileNav";

const Header = () => {
  const { isMobileNavOpen, toggleMobileNav, mobileNavRef, headerBarsRef } =
    useMobileNav();

  return (
    <>
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
            <button type="button" ref={headerBarsRef} onClick={toggleMobileNav}>
              <i className="bx  bx-menu"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile */}
      <div ref={mobileNavRef} className="mobile-header">
        <nav>
          <ul>
            <li>
              {" "}
              <a href="#">Flashcards</a>
            </li>

            <li>
              {" "}
              <a href="#">Academic</a>
            </li>

            <li>
              {" "}
              <a href="#">General</a>
            </li>

            <li>
              {" "}
              <a href="#">Sign in</a>
            </li>
          </ul>
        </nav>

        <button type="button" onClick={toggleMobileNav}>
          <i className="bx  bx-x"></i>
        </button>
      </div>
    </>
  );
};

export default Header;
