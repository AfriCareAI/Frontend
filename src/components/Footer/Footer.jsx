import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer" data-aos="fade-up">
      <div className="footer-container">
        <div className="footer-header" data-aos="fade-up">
          <h3>AfriCare</h3>
          <button className="join-africare-btn">Join AfriCare</button>
        </div>
        <div className="footer-content" data-aos="fade-up">
          <div className="footer-content-card">
            <h4>Your Account</h4>
            <ul>
              <li>Signup</li>
              <li>Login</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="footer-content-card">
            <h4>Quick Links</h4>
            <ul>
              <li>About</li>
              <li>How It Works</li>
              <li>Services</li>
              <li>The Team</li>
            </ul>
          </div>
          <div className="footer-content-card">
            <h4>Socials</h4>
            <ul>
              <li>Twitter: @afri_care</li>
              <li>LinkedIn: afri_care</li>
              <li>Medium: africare</li>
            </ul>
          </div>
          <div className="footer-content-card">
            <h4>Contacts</h4>
            <ul>
              <li>Email: helloafricare@gmail.com</li>
              <li>Phone: +254 798 511 798</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 AfriCare. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
