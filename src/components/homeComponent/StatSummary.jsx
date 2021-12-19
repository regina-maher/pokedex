import React from "react";
import "./StatSummary.css";

export default function StatSummary(props) {
  if (props.results) {
    const weight = props.results.data.weight;
    const height = props.results.data.height;
    const [...moves] = props.results.data.moves;

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
