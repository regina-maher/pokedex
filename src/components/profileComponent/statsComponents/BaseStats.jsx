import React, { useContext } from "react";
import "./BaseStats.css";
import StatBars from "./StatBars";
import { ResultsContext } from "../../../ResultsContext";

export default function BaseStats(props) {
  const { results } = useContext(ResultsContext);
  const [...stats] = results.data.stats;

  return (
    <div className="BaseStats">
      <div className="row">
        <div className="col-3">
          <h5 className="stat-heading">type</h5>
          {stats.map((stat, index) => {
            return (
              <div key={index} className="stat-title">
                {stat.stat.name.replace("-", " ")}
              </div>
            );
          })}
        </div>
        <div className="col-2">
          <h5 className="stat-heading">effort</h5>
          {stats.map((stat, index) => {
            return (
              <div key={index} className="stat-title">
                {stat.effort}
              </div>
            );
          })}
        </div>
        <div className="col-1">
          <h5 className="stat-heading">impact</h5>
          {stats.map((stat, index) => {
            return (
              <div key={index} className="stat-title">
                {stat.base_stat}
              </div>
            );
          })}
        </div>
        <div className="col-6">
          <StatBars id={props.id} stats={stats} />
        </div>
      </div>
    </div>
  );
}
