import React from "react";
import { useFetch } from "../useFetch";

const Additional = (props) => {
  if (!props.loading) {
    let eggs = props.data.data.egg_groups;
    const eggArr = [];
    for (const [key, { ...egg }] of Object.entries(eggs)) {
      eggArr.push(`${egg.name} `);
    }
    const addArr = [
      {
        title: "hatch counter",
        value: props.data.data.hatch_counter,
      },
      {
        title: "🥚 eggs",
        value: eggArr,
      },
      {
        title: "🐣 is baby",
        value: props.data.data.is_baby ? "Yes" : "No",
      },
      {
        title: "🐉 is legendary",
        value: props.data.data.is_legendary ? "Yes" : "No",
      },
      {
        title: "🦄 is mythical",
        value: props.data.data.is_mythical ? "Yes" : "No",
      },
      {
        title: "🌊🍃habitat",
        value: props.data.data.habitat.name,
      },
      {
        title: "has gender difference",
        value: props.data.data.has_gender_differences ? "Yes" : "No",
      },
      {
        title: "growth rate",
        value: props.data.data.growth_rate.name,
      },
    ];
    return (
      <div className="Additional pt-2">
        <h5 className="stat-heading">Additional details</h5>
        {addArr.map((data, index) => {
          return (
            <div key={index} className="d-flex">
              <div className="col-7 stat-title">{data.title}:</div>
              <div className="col-5 stat-value">{data.value}</div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="loading pt-4 ps-4">
        retrieveing additional details....
      </div>
    );
  }
};

export default Additional;
