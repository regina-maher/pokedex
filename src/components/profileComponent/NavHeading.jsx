import React from "react";
import "./NavHeading.css";

function NavHeading(props) {
  return (
    <div className="NavHeading">
      <nav>
        <ul className="nav-list">
          {props.tabContent.map((tab, index) => {
            return (
              <li
                key={index}
                className={tab.id === props.active ? "active" : "inactive"}
              >
                <button
                  onClick={() => props.setActive(tab.id)}
                  className="stat-heading"
                >
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
      </nav>
    </div>
  );
}

export default NavHeading;
