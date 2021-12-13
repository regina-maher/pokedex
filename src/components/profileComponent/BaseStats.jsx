import React, { useEffect, useState } from "react";
import "./BaseStats.css";
import StatBars from "./StatBars";

export default function BaseStats(props) {
  const [...stats] = props.results.stats;
  // const [skillBarData, setSkillBarData] = useState([]);
  // let skilkBar = [];
  // function createBars() {
  //   for (let i = 0; i < stats.length; i++) {
  //     skilkBar.push({
  //       width: `${stats[i].base_stat}%`,
  //     });
  //   }
  //   setSkillBarData(skilkBar);
  // }
  // useEffect(() => {
  //   createBars();
  // }, []);
  return (
    <div className="BaseStats">
      <div className="row">
        <div className="col-3">
          <h5 className="stat-heading">type</h5>
          {stats.map((stat, index) => {
            return (
              <div key={index} className="stat-title">
                {stat.stat.name}
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
        <div className="col-2">
          <h5 className="stat-heading">impact</h5>
          {stats.map((stat, index) => {
            return (
              <div key={index} className="stat-title">
                {stat.base_stat}
              </div>
            );
          })}
        </div>
        <div className="col-5">
          <StatBars results={props.results} stats={stats} />
        </div>
      </div>
    </div>
  );
}
