import React, { useContext } from "react";
import "./StatSummary.css";
import { ResultsContext } from "../../ResultsContext";

export default function StatSummary() {
  const { results } = useContext(ResultsContext);
  if (results) {
    const stats = [];
    const createStatsArr = ({ weight, height, moves }) => {
      return stats.push(
        {
          title: "weight",
          value: weight,
        },
        {
          title: "height",
          value: height,
        },
        {
          title: "moves",
          value: moves.length,
        }
      );
    };
    createStatsArr(results.data);
    console.log(stats);
    return (
      <div className="StatSummary">
        <div className="row pe-3">
          {stats.map((stat, index) => {
            return (
              <div key={index} className="stats d-flex">
                <div className="col-6 unit">{stat.title}</div>
                <div className="col-6 value">{stat.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else return null;
}
