import React, { useContext } from "react";
import "./StatSummary.css";
import { ResultsContext } from "../../ResultsContext";

export default function StatSummary() {
  const { results } = useContext(ResultsContext);

  if (results) {
    const weight = results.data.weight;
    const height = results.data.height;
    const [...moves] = results.data.moves;
    return (
      <div className="StatSummary">
        <div className="row pe-3">
          <div className="col-6">
            <ul>
              <li className="unit">weight:</li>
              <li className="unit">height:</li>
              <li className="unit">moves:</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li className="value">{weight}</li>
              <li className="value">{height}</li>
              <li className="value">{moves.length}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else return null;
}
