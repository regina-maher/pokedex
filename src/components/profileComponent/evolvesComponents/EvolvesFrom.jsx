import React from "react";
import { useFetch } from "../useFetch";
import "./EvolvesFrom.css";
import Loader from "react-loader-spinner";
import EvolvesFromLast from "./EvolvesFromLast";
import DisplayEvolutioData from "./DisplayEvolutioData";

const EvolvesFrom = (props) => {
  if (props.data) {
    let url = `https://pokeapi.co/api/v2/pokemon/${props.data.name}`;
    const { data, loading } = useFetch(url);
    if (!loading) {
      return (
        <div className="EvolvesFrom">
          <DisplayEvolutioData
            data={data}
            name={props.name}
            setResults={props.setResults}
          />
          {data.data.name !== props.evolvesFromLast ? (
            <EvolvesFromLast
              name={props.evolvesFromLast}
              setResults={props.setResults}
            />
          ) : (
            ""
          )}
        </div>
      );
    } else {
      return (
        <div className="loading">
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      );
    }
  } else {
    return (
      <div className="EvolvesFrom">
        <div className="card no-evolve">
          {props.name} does not evolve from another pokemon
        </div>
      </div>
    );
  }
};

export default EvolvesFrom;
