import React from "react";
import { useFetch } from "../useFetch";
import Loader from "react-loader-spinner";
import DisplayEvolutioData from "./DisplayEvolutioData";

const EvolvesFromLast = (props) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${props.name}`;
  const { data, loading } = useFetch(url);
  if (!loading) {
    return (
      <div className="EvolvesFromLast">
        <DisplayEvolutioData data={data} name={props.name} evolvesTo={false} />
      </div>
    );
  } else {
    return (
      <div className="loading">
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
};

export default EvolvesFromLast;
