import React from "react";
import "./About.css";

export default function About(props) {
  const [...ability] = props.results.abilities;
  const abilityArr = [];
  for (const [key, { ...name }] of Object.entries(ability)) {
    abilityArr.push(`${name.ability.name} `);
  }
  const aboutDets = [
    {
      title: "id",
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
  ];
  console.log(aboutDets);
  return (
    <div className="About">
      <div className="row pt-3">
        <div className="col-8">
          <h5 className="stat-heading">basic details</h5>
          <div className="row">
            {aboutDets.map((data, index) => {
              console.log(data.value.length);
              return (
                <div key={index} className="basic-details d-flex">
                  <div className="col-5 stat-title">{data.title}</div>
                  <div className="col-6 stat-value">
                    {data.value ? data.value : "unknown"}
                  </div>
                </div>
              );
            })}
          </div>
          <h5 className="stat-heading pt-3">breeding</h5>
        </div>
      </div>
    </div>
  );
}
