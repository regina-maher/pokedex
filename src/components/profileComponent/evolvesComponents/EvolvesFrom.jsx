import React from "react";
import { useFetch } from "../useFetch";
import "./EvolvesFrom.css";

const EvolvesFrom = (props) => {
  console.log(props.data);
  if (props.data) {
    let url = `https://pokeapi.co/api/v2/pokemon/${props.data.name}`;
    const { data, loading } = useFetch(url);
    const typeArry = [];
    if (!loading) {
      console.log(data.data);
      const types = data.data.types;
      for (const [key, { ...type }] of Object.entries(types)) {
        typeArry.push(type.type.name);
      }
      const weight = data.data.weight;
      const height = data.data.height;
      const [...moves] = data.data.moves;
      return (
        <div className="EvolvesFrom">
          <h5 className="stat-heading ps-2 pb-3">Evolves from</h5>
          <div className="card">
            <h5 className="stat-heading">{props.data.name}</h5>
            {typeArry.map((type, index) => {
              return (
                <div key={index} className="details pb-2">
                  {type}
                </div>
              );
            })}
            <div className="d-flex">
              <div className="row">
                <div className="col-6">
                  <ul className="details">
                    <li className="unit">weight:</li>
                    <li className="unit">height:</li>
                    <li className="unit">moves:</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="details">
                    <li className="value">{weight}</li>
                    <li className="value">{height}</li>
                    <li className="value">{moves.length}</li>
                  </ul>
                </div>
              </div>
              <img
                className="img-fluid pokemon"
                alt={props.data.name}
                src={data.data.sprites.other.dream_world.front_default}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="loading">Loading...</div>;
    }
  } else {
    return (
      <div className="EvolvesFrom">
        <div className="card">
          <strong>{props.name}</strong> does not evolve from another pokemon
        </div>
      </div>
    );
  }
};

export default EvolvesFrom;
