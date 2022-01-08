import React, { useState } from "react";
import { useFetch } from "../useFetch";
import DisplayEvolutioData from "./DisplayEvolutioData";

const EvolvesToNext = (props) => {
  if (props.nextEvolv.name) {
    const { data, loading } = useFetch(
      `https://pokeapi.co/api/v2/pokemon/${props.nextEvolv.name}`
    );
    if (!loading) {
      return (
        <div className="EvolvesToNext">
          <DisplayEvolutioData
            data={data}
            name={props.name}
            setResults={props.setResults}
            evolvesTo={true}
            lastEvolv={props.lastEvolv}
          />
        </div>
      );
    } else {
      return null;
    }
  } else {
    return (
      <div className="EvolvesToNext">
        <h5 className="stat-heading ps-2 pb-3">Evolves from</h5>
        <div className="card no-evolve">
          {props.OGName} does not evolve to another pokemon
        </div>
      </div>
    );
  }
};

export default EvolvesToNext;
