import React from "react";
import "./ProgressBar.css";

const ProgressBar = (props) => {
  const { completed } = props;

  const fillerStyles = {
    width: `${completed / 1.5}%`,
  };

  return (
    <div className="ProgressBar">
      <div className="container-fluid bar-background">
        <div id={props.id} style={fillerStyles} className="bar fade-in"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
