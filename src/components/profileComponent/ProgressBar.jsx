import React from "react";
import "./ProgressBar.css";

const ProgressBar = (props) => {
  const { completed } = props;

  const fillerStyles = {
    width: `${completed}%`,
  };

  return (
    <div className="ProgressBar">
      <div className="container-fluid bar-background">
        <div style={fillerStyles} className="bar fade-in"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
