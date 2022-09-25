import React from "react";
import { IoIosWifi } from "react-icons/io";
import { IoIosBatteryFull } from "react-icons/io";
import { GiNetworkBars } from "react-icons/gi";
import "./statusBar.css";

const StatusBar = () => {
  return (
    <div className="status-bar">
      <span className="time">9:41</span>
      <span>
        <GiNetworkBars className="status-bar-icon" />
        <IoIosWifi className="status-bar-icon" />
        <IoIosBatteryFull className="status-bar-icon" />
      </span>
    </div>
  );
};

export default StatusBar;
