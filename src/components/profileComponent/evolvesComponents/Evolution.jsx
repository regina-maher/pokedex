import React from "react";
import EvolvesFrom from "./EvolvesFrom";
import { useFetch } from "../useFetch";
import EvolvesTo from "./EvolvesTo";
import Loader from "react-loader-spinner";

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
          <div>
            <h5 className="stat-heading ps-2 pb-2">Evolves from</h5>
            <EvolvesFrom
              data={props.data.data.evolves_from_species}
              name={props.data.data.name}
            />
          </div>
          <div>
            <h5 className="stat-heading ps-2 pb-2">Evolves to</h5>

            <EvolvesTo
              nextEvolv={nextEvolv}
              lastEvolv={lastEvolv}
              OGName={props.data.data.name}
            />
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
  }
};

export default Evolution;
