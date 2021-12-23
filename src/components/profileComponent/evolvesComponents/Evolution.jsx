import React from "react";
import EvolvesFrom from "./EvolvesFrom";
import { useFetch } from "../useFetch";
import EvolvesTo from "./EvolvesTo";

const Evolution = (props) => {
  if (!props.loading) {
    console.log(props.data.data);
    let url = props.data.data.evolution_chain.url;
    const { data, loading } = useFetch(url);
    if (!loading) {
      console.log(data.data.chain);
      const evolvesToDetailsLog1 =
        data.data.chain.evolves_to[0]?.evolution_details[0];
      const evolvesToDetailsLog2 =
        data.data.chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0];
      const evolvesToName =
        data.data.chain.evolves_to[0]?.evolves_to[0]?.species.name;
      // const evolvesToUrl =
      //   data.data.chain.evolves_to[0]?.evolves_to[0]?.species.url;

      return (
        <div className="Evolution d-flex">
          <EvolvesFrom
            data={props.data.data.evolves_from_species}
            name={props.data.data.name}
          />
          <EvolvesTo
            name={evolvesToName}
            OGName={props.data.data.name}
            evolvesTo1={evolvesToDetailsLog1}
            evolvesTo2={evolvesToDetailsLog2}
          />
        </div>
      );
    } else {
      return <div className="loading pt-3">Loading....</div>;
    }
  }
};

export default Evolution;
