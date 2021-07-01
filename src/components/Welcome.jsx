import React from "react";
import WriteButton from "./WriteButton";
import Space from "./Space";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="Welcome">
      <Link to="/help" className="navButton helpButton">
        Help
      </Link>
      <Space xl />
      <div>
        <div className="logo">
          <div className="mark"></div>
          <h1>
            <span>Keep writing!</span>
            <span>Every. Single.</span>
            <span>Day</span>
          </h1>
        </div>
        <Space m />
        <h2>
          Start a new writing session!
          <i className="caret icon-cursor" />
        </h2>
        <Space xl />
        <WriteButton ghost color="red" />
      </div>
      {/* <div className="accolades" /> */}
    </div>
  );
};

export default Welcome;
