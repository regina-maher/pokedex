import React, { useContext } from "react";
import "./AbilitiesSummary.css";
import { ResultsContext } from "../../ResultsContext";

export default function AbilitiesSummary() {
  const { results } = useContext(ResultsContext);

  if (results) {
    const [...abilities] = results.data.abilities;
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
