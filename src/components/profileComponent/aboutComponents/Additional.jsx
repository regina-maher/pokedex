import React, { useContext } from "react";
// import { ResultsContext } from "../../../ResultsContext";

const Additional = (props) => {
  // const { results } = useContext(ResultsContext);

  if (!props.loading) {
    let eggs = props.data.data.egg_groups;
    const eggArr = [];
    for (const { ...egg } of Object.values(eggs)) {
      eggArr.push(egg.name);
    }
    const addArr = [
      {
        title: "hatch counter",
        value: props.data.data.hatch_counter,
      },
      {
        title: "π₯ eggs",
        value: eggArr.join(", "),
      },
      {
        title: "π£ is baby",
        value: props.data.data.is_baby ? "Yes" : "No",
      },
      {
        title: "π is legendary",
        value: props.data.data.is_legendary ? "Yes" : "No",
      },
      {
        title: "π¦ is mythical",
        value: props.data.data.is_mythical ? "Yes" : "No",
      },
      {
        title: "ππhabitat",
        value: props.data.data.habitat.name.replace("-", " "),
      },
      {
        title: "βοΈβοΈ has gender difference",
        value: props.data.data.has_gender_differences ? "Yes" : "No",
      },
      {
        title: "βοΈ growth rate",
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
