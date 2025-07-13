import React from "react";
import "./login.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="login-wrapper">
        <div className="login-container">
          <h2 className="login-title">Log in</h2>

          <form>
            <div className="login-form-group">
              <label>Email</label>
              <input type="email" name="" id="" />
            </div>

            <div className="login-form-group">
              <label>Password</label>
              <input type="password" name="" id="" />
            </div>

            <div className="remember-forgot">
              <div className="remember-check">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>

              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <div className="login-form-footer">
              <button className="login-btn">Log in</button>
            </div>

            <div className="signUp-link">
              Don't have an account?{" "}
              <a onClick={() => navigate("/signup")}>Sign up</a>
            </div>

            <div className="login-divider">
              <hr />
              <span>Or continue with</span>
              <hr />
            </div>

            <div className="social-login-buttons">
              <button className="social-btn github">
                <i className="bx bxl-facebook-circle"></i>
              </button>
              <button className="social-btn google">
                <i className="bx bxl-google"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
