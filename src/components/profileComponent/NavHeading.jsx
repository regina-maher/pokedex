import React, { useState } from "react";
import "./NavHeading.css";

function NavHeading(props) {
  const headings = ["about", "base stats", "evolution", "moves"];
  let activeArry = [];
  function updatedHeading(id) {
    activeArry = props.active;
    for (let i = 0; i < headings.length; i++) {
      if (activeArry[i]) {
        activeArry[i] = false;
      }
    }
    activeArry[id] = true;
    props.setActive(activeArry);
    console.log(props.active);
  }
  return (
    <div className="NavHeading">
      <nav>
        <ul className="nav-list">
          {headings.map((title, index) => {
            return (
              <button
                className={props.active[index] ? "active" : "inactive"}
                key={index}
                onClick={() => updatedHeading(index)}
              >
                <li>{title}</li>
              </button>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavHeading;
