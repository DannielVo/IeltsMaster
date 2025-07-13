import React from "react";
import "./footer.css";
import { assets } from "../../assets/asset";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

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
                <a onClick={() => navigate("/about")}>About</a>
              </li>
              <li>
                <a onClick={() => navigate("/journey")}>Our Journey</a>
              </li>
              <li>
                <a onClick={() => navigate("/contact")}>Contact Us</a>
              </li>
            </ul>
          </div>

          {/* <!-- Resources --> */}
          <div className="footer-info">
            <h4>Resources</h4>
            <ul>
              <li>
                <a onClick={() => navigate("/studymaterials")}>
                  Study Materials
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/tests")}>Test Library</a>
              </li>
            </ul>
          </div>

          {/* <!-- Terms & Policies --> */}
          <div className="footer-info">
            <h4>Terms & Policies</h4>
            <ul>
              <li>
                <a onClick={() => navigate("/terms-of-service")}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/privacy")}>Privacy Policy</a>
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
