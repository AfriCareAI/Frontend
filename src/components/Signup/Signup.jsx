import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaTwitter, FaApple } from "react-icons/fa";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import heart from "../../assets/heart.svg";
import login from "../../assets/med.svg";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="signup-page">
      <h2>
        AfriCare <img src={heart} alt="heart" />
      </h2>
      <div className="signup-container">
        <div className="signup-left">
          <h3>Create Account</h3>
          <p>Better Health. Better Life</p>
          <div className="signup-form-container">
            <form className="signup-form">
              <div className="names-container">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="text" placeholder="Email" required />
              <input type="text" placeholder="Phone Number" required />
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
              <div className="policy">
                <input type="checkbox" required />
                <p>
                  I agree to the <Link to="/terms">Terms of Service</Link> and{" "}
                  <Link to="/privacy">Privacy Policy</Link>
                </p>
              </div>
              <button type="submit">Create Account</button>
              <p>
                Already have an account?<Link to="/login">Login</Link>
              </p>
              <p>Or register with</p>
              <div className="signup-alts">
                <button className="signup-alts-btn">
                  <FaGoogle size={20} />
                </button>
                <button className="signup-alts-btn">
                  <FaFacebook size={20} />
                </button>
                <button className="signup-alts-btn">
                  <FaTwitter size={20} />
                </button>
                <button className="signup-alts-btn">
                  <FaApple size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="signup-right">
          <img src={login} alt="login-img" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
