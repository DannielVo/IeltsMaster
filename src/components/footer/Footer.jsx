import React from "react";
import "./footer.css";
import { assets } from "../../assets/asset";

const Footer = () => {
  return (
    <footer className="left-right">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <!-- Logo --> */}
          <div className="footer-logo">
            <img src={assets.logoFooter} alt="" />
            <p>High-quality educational environment for learning English</p>
          </div>
        </div>

        <div className="footer-content-right">
          {/* <!-- About us --> */}
          <div className="footer-info">
            <h4>About us</h4>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Our Journey</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* <!-- Resources --> */}
          <div className="footer-info">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="">Study Materials</a>
              </li>
              <li>
                <a href="">Test Library</a>
              </li>
            </ul>
          </div>

          {/* <!-- Terms & Policies --> */}
          <div className="footer-info">
            <h4>Terms & Policies</h4>
            <ul>
              <li>
                <a href="">Terms of Service</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Social & Bottom --> */}
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#" className="social-icon">
            <i className="bx bxs-phone"></i>
          </a>
          <a href="" className="social-icon">
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="bx bxs-envelope"></i>
          </a>
        </div>
        <p>© 2025 IELTS Master. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
