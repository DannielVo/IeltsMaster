import React from "react";
import "./signUp.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="signUp-wrapper">
        <div className="signUp-container">
          <h2 className="signUp-title">Sign up</h2>

          <form>
            <div className="signUp-form-group">
              <label for="">Email</label>
              <input type="email" name="" id="" />
            </div>

            <div className="signUp-form-group">
              <label for="">Password</label>
              <input type="password" name="" id="" />
            </div>

            <div className="signUp-form-group">
              <label for="">Confirm Password</label>
              <input type="password" name="" id="" />
            </div>

            <div className="signUp-form-footer">
              <button className="signUp-btn">Sign up</button>
            </div>

            <div className="login-link">
              Already have an account?{" "}
              <a onClick={() => navigate("/login")}>Log in</a>
            </div>

            <div className="signUp-divider">
              <hr />
              <span>Or continue with</span>
              <hr />
            </div>

            <div className="social-signUp-buttons">
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

export default SignUp;
