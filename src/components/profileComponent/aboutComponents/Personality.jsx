import React, { useContext } from "react";
import { useFetch } from "../useFetch";
import { ResultsContext } from "../../../ResultsContext";

const Personality = (props) => {
  const { results } = useContext(ResultsContext);
  let url = results.data.species.url;
  const { data, loading } = useFetch(url);
  if (!loading) {
    let personalityDets = [
      {
        title: "😊 base happiness",
        value: data.data.base_happiness,
      },
      {
        title: "🔴 capture rate",
        value: data.data.capture_rate,
      },
    ];
    return (
      <div className="Personality">
        <h5 className="stat-heading pt-2">personality details</h5>
        <div className="row">
          {personalityDets.map((trait, index) => {
            return (
              <div key={index} className="d-flex">
                <div className="col-8 stat-title">{trait.title}:</div>
                <div className="col-4 stat-value">{trait.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div className="loading">retrieveing personality traits....</div>;
  }
};
export default Personality;
