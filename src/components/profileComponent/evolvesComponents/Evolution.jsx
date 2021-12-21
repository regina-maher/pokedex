import React, { useState } from "react";
import EvolvesFrom from "./EvolvesFrom";
import { useFetch } from "../useFetch";

const Evolution = (props) => {
  if (!props.loading) {
    console.log(props.data.data);
    let url = props.data.data.evolution_chain.url;
    const { data, loading } = useFetch(url);
    if (!loading) {
      console.log(data.data);
    }
    return (
      <div className="Evolution">
        <EvolvesFrom data={props.data.data.evolves_from_species} />
      </div>
    );
  } else {
    return <div className="loading pt-3">Loading....</div>;
  }
};

export default Evolution;
