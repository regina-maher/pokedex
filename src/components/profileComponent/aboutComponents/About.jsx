import React, { useContext } from "react";
import "./About.css";
import Additional from "./Additional";
import Personality from "./Personality";
import { useFetch } from "../useFetch";
import { ResultsContext } from "../../../ResultsContext";

export default function About() {
  const { results } = useContext(ResultsContext);
  let url = results.data.species.url;
  const { data, loading } = useFetch(url);
  const [...ability] = results.data.abilities;
  const abilityArr = [];
  for (const { ...name } of Object.values(ability)) {
    abilityArr.push(name.ability.name);
  }
  const aboutDets = [
    {
      title: "🆔 pokedex id",
      value: [results.data.id],
    },
    {
      title: "↕️ height",
      value: [results.data.height],
    },
    {
      title: "↔️ weight",
      value: [results.data.weight],
    },
    {
      title: "💪 abilities",
      value: abilityArr.join(", ").replace("-", " "),
    },
    {
      title: "⭕ base experience",
      value: [results.data.base_experience],
    },
    {
      title: "👊 moves",
      value: [results.data.moves.length],
    },
  ];
  return (
    <div className="About">
      <div className="basic-details">
        <h5 className="stat-heading ">basic details</h5>
        <div className="row">
          {aboutDets.map((data, index) => {
            return (
              <div key={index} className="d-flex">
                <div className="col-6 stat-title">{data.title}:</div>
                <div className="col-6 stat-value">
                  {data.value ? data.value : "n/a"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt-3 pb-3 basic-details">
        <Personality />
      </div>
      <div className="basic-details">
        <Additional data={data} loading={loading} />
      </div>
    </div>
  );
}
