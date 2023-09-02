import React, { useState, useEffect } from "react";
import "./homepage.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import dp from "../../assets/dp.jpg";
import Sidenav from "../Sidenav/Sidenav";
import doctor from "../../assets/doctor.jpg";

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
          <div className="right-dash-header">
            <h4>Hello, Malkia</h4>
            <p>How are you feeling today?</p>
          </div>
          <div className="dashboard-cards">
            <div className="user-profile">
              <img src={dp} alt="dp" />
              <h3>Zola Malkia</h3>
              <p>24 years, Ethiopia</p>
              <div className="profile-dets">
                <div className="profile-det">
                  <p>Blood</p>
                  <h4>B-</h4>
                </div>
                <div className="profile-det">
                  <p>Height</p>
                  <h4>170cm</h4>
                </div>
                <div className="profile-det">
                  <p>Weight</p>
                  <h4>60kg</h4>
                </div>
              </div>
            </div>
            <div className="recent-diagnostics">
              <h3>Recent diagnostics</h3>
              <div className="diagnostics">
                <div className="diagnostic">
                  <p>12 Jul, 2023</p>
                  <h4>Hypertensive crisis</h4>
                  <button type="submit">View Details</button>
                  <br />
                </div>
                <div className="diagnostic">
                  <p>18 Jul, 2023</p>
                  <h4>Osteoporosis</h4>
                  <button type="submit">View Details</button>
                  <br />
                </div>
                <div className="diagnostic">
                  <p>12 Jul, 2023</p>
                  <h4>Hypertensive crisis</h4>
                  <button type="submit">View Details</button>
                  <br />
                </div>
              </div>
            </div>
            <div className="book-appointment">
              <h3>Book an appointment</h3>
              <div className="appointments">
                <div className="appointment">
                  <p>01.</p>
                  <h4>Dr. Rashni</h4>
                  <p>Cardiologist</p>
                  <img src={doctor} alt="doctor" />
                  <button type="submit">Book</button>
                </div>
                <div className="appointment">
                  <p>01.</p>
                  <h4>Dr. Rashni</h4>
                  <p>Cardiologist</p>
                  <img src={doctor} alt="doctor" />
                  <button type="submit">Book</button>
                </div>
                <div className="appointment">
                  <p>01.</p>
                  <h4>Dr. Rashni</h4>
                  <p>Cardiologist</p>
                  <img src={doctor} alt="doctor" />
                  <button type="submit">Book</button>
                </div>
                <div className="appointment">
                  <p>01.</p>
                  <h4>Dr. Rashni</h4>
                  <p>Cardiologist</p>
                  <img src={doctor} alt="doctor" />
                  <button type="submit">Book</button>
                </div>
              </div>
            </div>
            <div className="number-of-diagnostics">
              <h3>Number of diagnostics</h3>
              <div className="diagnostic-options">
                <div className="date-range-selection">
                  <label>Select Date Range:</label>
                  <select>
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 6 months</option>
                    <option>Last year</option>
                  </select>
                </div>
              </div>
              <div className="diagnostic-number">
                <div className="number-circle">
                  <h2>12</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
