import React from "react";
import EvolvesFrom from "./EvolvesFrom";
import { useFetch } from "../useFetch";
import EvolvesTo from "./EvolvesTo";
import Loader from "react-loader-spinner";
import "./Evolution.css";

const Evolution = (props) => {
  if (!props.loading) {
    console.log(props.data.data);
    let url = props.data.data.evolution_chain.url;
    const { data, loading } = useFetch(url);
    if (!loading) {
      console.log(data.data.chain);
      const nextEvolv = {
        name: data.data.chain.evolves_to[0]?.species?.name,
      };
      const lastEvolv = {
        name: data.data.chain.evolves_to[0]?.evolves_to[0]?.species.name,
        details1: data.data.chain.evolves_to[0]?.evolution_details[0],
        details2:
          data.data.chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0],
      };
      console.log(data.data);
      return (
        <div className="Evolution d-flex">
          <EvolvesFrom
            data={props.data.data.evolves_from_species}
            name={props.data.data.name}
          />
          <EvolvesTo
            nextEvolv={nextEvolv}
            lastEvolv={lastEvolv}
            OGName={props.data.data.name}
          />
        </div>
      );
    } else {
      return (
        <div className="loading pt-3">
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      );
    }
  }
};

export default Evolution;
