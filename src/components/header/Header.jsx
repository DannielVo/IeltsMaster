import React from "react";
import "./header.css";
import { assets } from "../../assets/asset";
import useMobileNav from "../../hooks/useMobileNav";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isMobileNavOpen, toggleMobileNav, mobileNavRef, headerBarsRef } =
    useMobileNav();

  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="header-container">
          <div className="nav-left">
            <a onClick={() => navigate("/")} className="logo">
              <img src={assets.logo} alt="Logo" />
            </a>
          </div>

          <div className="nav-right">
            <a onClick={() => navigate("/flashcards")}>Flashcards</a>
            <a onClick={() => navigate("/academic")}>Academic</a>
            <a onClick={() => navigate("/general")}>General</a>
            <a onClick={() => navigate("/login")}>Sign in</a>
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
              <a onClick={() => navigate("/flashcards")}>Flashcards</a>
            </li>

            <li>
              <a onClick={() => navigate("/academic")}>Academic</a>
            </li>

            <li>
              <a onClick={() => navigate("/general")}>General</a>
            </li>

            <li>
              <a onClick={() => navigate("/login")}>Sign in</a>
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
