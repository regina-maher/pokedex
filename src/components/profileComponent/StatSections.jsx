import React, { useState } from "react";
import "./StatSections.css";
import BaseStats from "./BaseStats";

export default function StatSections(props) {
  const [statHeading, setStatHeading] = useState([
    { id: 0, active: true, title: "about" },
    { id: 1, active: false, title: "base stats" },
    { id: 2, active: false, title: "evolution" },
    { id: 3, active: false, title: "moves" },
  ]);
  const [...stats] = props.results.stats;

  function changeHeading(id) {
    for (let i = 0; i < statHeading.length; i++) {
      if (statHeading[i].active) {
        statHeading[i].active = false;
      }
    }
    statHeading[id].active = true;
    setStatHeading(statHeading);
    console.log(statHeading);
  }
  return (
    <div className="StatSections">
      <div className="row mb-3">
        {statHeading.map((heading, index) => {
          return (
            <div
              key={index}
              onClick={() => changeHeading(heading.id)}
              className="col pt-2 text-center"
            >
              <button className="btn">
                <h3
                  className={
                    heading.active
                      ? "active stat-heading"
                      : "inactive stat-heading"
                  }
                >
                  {heading.title}
                </h3>
              </button>
            </div>
          );
        })}
      </div>
      <BaseStats results={props.results} />
    </div>
  );
}
