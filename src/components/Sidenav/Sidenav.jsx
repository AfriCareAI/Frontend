import React from "react";
import "./sidenav.css";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineQueryStats } from "react-icons/md";
import { BsChatText } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";


const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-container">
        <div className="sidenav-content">
          <LuLayoutDashboard size={28} color='#003D6B'/>
          <p>
            <Link className="links" to="/dashboard">Dashboard</Link>
          </p>
        </div>
        <div className="sidenav-content">
          <MdOutlineQueryStats size={28} color='#003D6B'/>
          <p>
            <Link className="links" to="/diagnostics">Diagnostics</Link>
          </p>
        </div>
        <div className="sidenav-content">
          <BsChatText size={28} color='#003D6B' />
          <p>
            <Link className="links" to="/chat">Chat</Link>
          </p>
        </div>
        <div className="sidenav-content">
          <AiOutlineUser size={28} color='#003D6B'/>
          <p>
            <Link className="links" to="/profile">Profile</Link>
          </p>
        </div>
        <div className="sidenav-content">
          <IoSettingsOutline size={28} color='#003D6B'/>
          <p>
            <Link className="links" to="/settings">Settings</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
