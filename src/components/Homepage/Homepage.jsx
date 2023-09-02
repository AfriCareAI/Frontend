import React, { useState, useEffect } from "react";
import "./homepage.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import dp from "../../assets/dp.jpg";
import Sidenav from "../Sidenav/Sidenav";

const Homepage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="homepage">
      <div className="homepage-nav">
        <h1>AfriCare</h1>
        <div className="time-display">{currentTime.toLocaleTimeString()}</div>
        <div className="homenav-right">
          <IoIosNotificationsOutline size={30} color="#003D6B" />
          <img src={dp} alt="dp" />
        </div>
      </div>
      <div className="dashboard">
        <Sidenav />
        <div className="right-dashboard">
          <h4>Hello, Malaika</h4>
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h5>Today's Appointments</h5>
              <p>0</p>
            </div>
            <div className="dashboard-car">
              <h5>Today's Appointments</h5>
              <p>0</p>
            </div>
            <div className="dashboard-car">
              <h5>Today's Appointments</h5>
              <p>0</p>
            </div>
            <div className="dashboard-card">
              <h5>Today's Appointments</h5>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
