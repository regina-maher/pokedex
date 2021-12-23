import React from "react";
import { useFetch } from "../useFetch";
import "./EvolvesFrom.css";

const EvolvesFrom = (props) => {
  if (props.data) {
    let url = `https://pokeapi.co/api/v2/pokemon/${props.data.name}`;
    const { data, loading } = useFetch(url);
    const typeArry = [];
    if (!loading) {
      const types = data.data.types;
      for (const [key, { ...type }] of Object.entries(types)) {
        typeArry.push(type.type.name);
      }
      const [...moves] = data.data.moves;
      const detailArr = [
        {
          title: "weight",
          value: data.data.weight,
        },
        {
          title: "height",
          value: data.data.height,
        },
        {
          title: "moves",
          value: moves.length,
        },
      ];
      return (
        <div className="EvolvesFrom">
          <h5 className="stat-heading ps-2 pb-3">Evolves from</h5>
          <div className="card">
            <div className="row">
              <div className="col-6 detail-col">
                <h5 className="stat-heading">{props.data.name}</h5>
                <div className="d-flex justify-content-around">
                  {typeArry.map((type, index) => {
                    return (
                      <div key={index} className="details-type pb-2">
                        {type}
                      </div>
                    );
                  })}
                </div>
                <div className="row">
                  {detailArr.map((detail, index) => {
                    return (
                      <div className="d-flex" key={index}>
                        <div className="details col-8">{detail.title}: </div>
                        <div className="details col-4">{detail.value}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-6 poke-col">
                <img
                  className="img-fluid pokemon"
                  alt={props.data.name}
                  src={data.data.sprites.other.dream_world.front_default}
                />
              </div>
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
        <h5 className="stat-heading ps-2 pb-3">Evolves from</h5>
        <div className="card no-evolve">
          {props.name}does not evolve from another pokemon
        </div>
      </div>
    );
  }
};

export default EvolvesFrom;
