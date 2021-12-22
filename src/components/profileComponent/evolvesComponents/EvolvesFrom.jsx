import React from "react";
import { useFetch } from "../useFetch";
import "./EvolvesFrom.css";
import Types from "../Types";

const EvolvesFrom = (props) => {
  console.log(props.data);
  if (!props.data == null) {
    let url = `https://pokeapi.co/api/v2/pokemon/${props.data.name}`;
    const { data, loading } = useFetch(url);
    const typeArry = [];
    const typeUrlArr = [];
    if (!loading) {
      console.log(data.data);
      const types = data.data.types;
      for (const [key, { ...type }] of Object.entries(types)) {
        typeArry.push(type.type.name);
        typeUrlArr.push(type.type.url);
      }
      return (
        <div className="EvolvesFrom">
          <h5 className="stat-heading ps-2 pb-3">Evolves from</h5>
          <div className="card">
            <h5 className="stat-heading">{props.data.name}</h5>
            <Types url={typeUrlArr} />
            <img
              className="img-fluid pokemon"
              alt={props.data.name}
              src={data.data.sprites.other.dream_world.front_default}
            />
          </div>
        </div>
      );
    } else {
      return <div className="loading">Loading...</div>;
    }
  } else {
    return (
      <div className="EvolvesFrom">Does not evolve from another pokemon</div>
    );
  }
};

export default EvolvesFrom;
