import React from "react";
import Clock from "react-live-clock";
import moment from "moment";
import "./Timer.css";

function Timer({ type }) {
  return (
    <div className="timer">
      
      <Clock format={type} ticking={true} a  />
    </div>
  );
}

export default Timer;
