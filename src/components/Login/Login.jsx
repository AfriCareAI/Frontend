import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaTwitter, FaApple } from "react-icons/fa";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import heart from "../../assets/heart.svg";
import login from "../../assets/med.svg";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="login-page">
      <h2>AfriCare <img src={heart} alt="heart" /></h2>
      
      <div className="login-container">
        <div className="login-left">
          <h3>Login</h3>
          <p>Better Health. Better Life</p>
          <div className="login-form-container">
            <form className="login-form">
              <input type="text" placeholder="Email" required/>
              <div className="password-input-wrapper">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <i className="eye-icon" onClick={togglePasswordVisibility}>
                  {passwordVisible ? (
                    <RiEyeFill size={24} />
                  ) : (
                    <RiEyeOffFill size={20} />
                  )}
                </i>
              </div>
              <Link className="forgot-links" to="forgot-password">
                Forgot Password?
              </Link>
              <button type="submit">Login</button>
              <p>
                No account yet?<Link to="/signup">Register</Link>
              </p>
              <p>Or login with</p>
              <div className="login-alts">
                <button className="login-alts-btn">
                  <FaGoogle size={20} />
                </button>
                <button className="login-alts-btn">
                  <FaFacebook size={20} />
                </button>
                <button className="login-alts-btn">
                  <FaTwitter size={20} />
                </button>
                <button className="login-alts-btn">
                  <FaApple size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="login-right">
          <img src={login} alt="login-img" />
        </div>
      </div>
    </div>
  );
};

export default Login;
