import React from "react";

export default function StatSummary(props) {
  if (props.results) {
    const weight = props.results.data.weight;
    const height = props.results.data.height;
    const [...moves] = props.results.data.moves;

    return (
      <div className="StatSummary">
        <h3 className="small-subheading">Stats</h3>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>weight:</li>
              <li>height:</li>
              <li>moves:</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>{weight}</li>
              <li>{height}</li>
              <li>{moves.length}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else return null;
}
