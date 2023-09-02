import React from "react";
import "./landing.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import heroimg from "../../assets/heart-tech.png";
import underline from "../../assets/underline.svg";
import ai from "../../assets/med-tech.jpg";
import input from "../../assets/input.svg";
import download from "../../assets/download.svg";
import processing from "../../assets/processing.svg";

const Landing = () => {
  return (
    <div className="landing-page">
    <div className="landing">
      <Navbar />
      <div className="landing-hero">
        <div className="landing-hero-text">
          <h2>Revolutionizing Healthcare Diagnosis</h2>
          <h4>
            Personalized, <span>Efficient</span>, Reliable
          </h4>
          <p>
            Welcome to AfriCare, where healthcare meets innovation. Our
            AI-driven platform is here to transform the way you receive medical
            diagnoses. Say goodbye to long waits and generic reports. With
            cutting-edge technology, we provide personalized, efficient, and
            reliable diagnostic reports tailored just for you. Your health, your
            data, your peace of mind – all in one place.
          </p>
          <button>Get Started</button>
        </div>
        <div className="landing-hero-img">
          <img src={heroimg} alt="login" />
        </div>
      </div>
      <div className="about">
        <div className="about-header" data-aos="fade-up">
          <h3>About Us</h3>
          <img src={underline} alt="underline" />
        </div>
        <div className="about-content" data-aos="fade-up">
          <div className="about-content-left">
            <img src={ai} />
          </div>
          <div className="about-content-right">
            <p>
              <span>Mission and Vision: </span>At AfriCare, our mission is to
              redefine healthcare diagnostics in Africa, putting personalized
              well-being at the forefront of our vision. We envision a continent
              where every individual, regardless of location or resources, has
              access to accurate and timely medical diagnoses.
            </p>
            <p>
              <span>
                The Importance of Personalized Healthcare Diagnostics:
              </span>
              We understand that every patient is unique, and so are their
              healthcare needs. AfriCare believes in the power of personalized
              healthcare diagnostics. By tailoring diagnoses to an individual's
              medical history, symptoms, and lab results, we aim to
              revolutionize healthcare delivery across Africa.
            </p>
          </div>
        </div>
      </div>
      <div className="how-it-works">
        <h3 data-aos="fade-up">How It Works</h3>
        <div className="process-contents">
          <div className="process-card" data-aos="fade-up">
            <img src={input} alt="process" />
            <p>
              Share your medical data effortlessly through our user-friendly
              interface.
            </p>
          </div>
          <div className="process-card" data-aos="fade-up">
            <img src={processing} alt="process" />
            <p>
              Our advanced AI algorithms analyze your data swiftly and
              accurately.
            </p>
          </div>
          <div className="process-card" data-aos="fade-up">
            <img src={download} alt="process" />
            <p>
              Receive a personalized diagnostic report for valuable health
              insights.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Landing;
