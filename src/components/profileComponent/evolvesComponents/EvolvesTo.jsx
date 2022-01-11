import React, { useState } from "react";
import { useFetch } from "../useFetch";
import "./EvolvesTo.css";
import EvolvesToNext from "./EvolvesToNext";
import DisplayEvolutioData from "./DisplayEvolutioData";

const EvolvesTo = (props) => {
  if (
    (props.nextEvolv.name != props.OGName) |
    ((props.lastEvolv.name != props.nextEvolv.name) &
      (props.lastEvolv.name != undefined))
  ) {
    const { data, loading } = useFetch(
      `https://pokeapi.co/api/v2/pokemon/${
        props.lastEvolv.name ? props.lastEvolv.name : props.nextEvolv.name
      }`
    );
    if (!loading) {
      return (
        <div className="EvolvesTo">
          {props.nextEvolv.name !== props.OGName ? (
            <EvolvesToNext
              nextEvolv={props.nextEvolv}
              lastEvolv={props.lastEvolv.details1}
            />
          ) : null}
          <div className={props.lastEvolv.name ? "mb-2" : "hide"}>
            <DisplayEvolutioData
              data={data}
              name={props.name}
              evolvesTo={true}
              lastEvolv={props.lastEvolv}
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  } else {
    return (
      <div className="EvolvesTo">
        <div className="card no-evolve">
          {props.OGName} does not evolve to another pokemon
        </div>
      </div>
    );
  }
};
export default EvolvesTo;
