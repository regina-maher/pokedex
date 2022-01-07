import React from "react";
import EvolvesFrom from "./EvolvesFrom";
import { useFetch } from "../useFetch";
import EvolvesTo from "./EvolvesTo";
import Loader from "react-loader-spinner";
import "./Evolution.css";

const Evolution = (props) => {
  if (!props.loading) {
    let url = props.data.data.evolution_chain.url;
    const { data, loading } = useFetch(url);
    if (!loading) {
      const { chain } = data.data;
      const { evolves_to } = chain;
      const nextEvolv = {
        name: evolves_to[0]?.species?.name,
      };
      const lastEvolv = {
        name: evolves_to[0]?.evolves_to[0]?.species.name,
        details1: evolves_to[0]?.evolution_details[0],
        details2: evolves_to[0]?.evolves_to[0]?.evolution_details[0],
      };
      const { name } = chain.species;
      const evolvesFromLast = name;
      const currentPokemon = props.data.data.name;
      return (
        <div className="Evolution d-flex">
          <div>
            <h5 className="stat-heading ps-2">Evolves from</h5>
            <EvolvesFrom
              setResults={props.setResults}
              data={props.data.data.evolves_from_species}
              name={currentPokemon}
              evolvesFromLast={evolvesFromLast}
            />
          </div>
          <div>
            <h5 className="stat-heading ps-3 pb-2">Evolves to</h5>
            {currentPokemon !== lastEvolv.name ? (
              <EvolvesTo
                setResults={props.setResults}
                nextEvolv={nextEvolv}
                lastEvolv={lastEvolv}
                OGName={currentPokemon}
              />
            ) : (
              <div className="card no-evolve">
                {currentPokemon} does not evolve to another pokemon
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="loading pt-3">
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      );
    }
  } else {
    return null;
  }
};

export default Evolution;
