import React from "react";
import "./AbilitiesSummary.css";

export default function AbilitiesSummary(props) {
  if (props.results) {
    const [...abilities] = props.results.data.abilities;
    return (
      <div className="AbilitiesSummary">
        <ul>
          {abilities.map((ability, index) => {
            return (
              <li key={index} className="listed-ability">
                {ability.ability.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
