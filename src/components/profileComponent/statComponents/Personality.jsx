import React from "react";
import { useFetch } from "./useFetch";

const Personality = (props) => {
  let url = props.results.species.url;
  const { data, loading } = useFetch(url);
  if (!loading) {
    console.log(data.data);
    let personalityDets = [
      {
        title: "base happiness",
        value: data.data.base_happiness,
      },
      {
        title: "capture rate",
        value: data.data.capture_rate,
      },
    ];
    return (
      <div className="Personality">
        <h5 className="stat-heading">personality details</h5>
        <div className="row">
          {personalityDets.map((trait, index) => {
            return (
              <div key={index} className="basic-details d-flex">
                <div className="col-8 stat-title">{trait.title}:</div>
                <div className="col-4 stat-value">{trait.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default Personality;
