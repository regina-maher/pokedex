import React from "react";
import { useFetch } from "../useFetch";
import "./EvolvesTo.css";

const EvolvesTo = (props) => {
  if (props.name) {
    console.log(props);
    const { data, loading } = useFetch(
      `https://pokeapi.co/api/v2/pokemon/${props.name}`
    );
    const typeArry = [];
    if (!loading) {
      console.log(data.data);
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
        <div className="EvolvesTo">
          <h5 className="stat-heading ps-2 pb-3">Evolves to</h5>
          <div className="card">
            <div className="row">
              <div className="col-6 detail-col">
                <h5 className="stat-heading">{props.name}</h5>
                <div className="d-flex justify-content-around">
                  {typeArry.map((type, index) => {
                    return (
                      <div id={type} key={index} className="details-type pb-2">
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
                  alt={props.name}
                  src={data.data.sprites.other.dream_world.front_default}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  } else {
    return (
      <div className="EvolvesFrom">
        <h5 className="stat-heading ps-2 pb-3">Evolves from</h5>
        <div className="card no-evolve">
          {props.OGName}does not evolve from another pokemon
        </div>
      </div>
    );
  }
};
export default EvolvesTo;
