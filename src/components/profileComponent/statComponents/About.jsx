import React, { useState } from "react";
import "./About.css";
import Personality from "./Personality";
import { useFetch } from "./useFetch";

export default function About(props) {
  const [...ability] = props.results.abilities;
  const abilityArr = [];
  for (const [key, { ...name }] of Object.entries(ability)) {
    abilityArr.push(`${name.ability.name} `);
  }
  const aboutDets = [
    {
      title: "pokedex_id",
      value: [props.results.id],
    },
    {
      title: "height",
      value: [props.results.height],
    },
    {
      title: "weight",
      value: [props.results.weight],
    },
    {
      title: "abilities",
      value: abilityArr,
    },
    {
      title: "base experience",
      value: [props.results.base_experience],
    },
    {
      title: "moves",
      value: [props.results.moves.length],
    },
  ];
  return (
    <div className="About">
      <div className="row">
        <div className="col-7">
          <h5 className="stat-heading">basic details</h5>
          <div className="row">
            {aboutDets.map((data, index) => {
              return (
                <div key={index} className="basic-details d-flex">
                  <div className="col-6 stat-title">{data.title}:</div>
                  <div className="col-6 stat-value">
                    {data.value ? data.value : "n/a"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-5">
          <Personality results={props.results} />
        </div>
      </div>
    </div>
  );
}
