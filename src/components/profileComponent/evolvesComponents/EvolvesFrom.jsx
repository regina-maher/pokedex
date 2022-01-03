import React from "react";
import { useFetch } from "../useFetch";
import "./EvolvesFrom.css";
import Loader from "react-loader-spinner";
import EvolvesFromLast from "./EvolvesFromLast";
import PokeDetails from "./PokeDetails";

const EvolvesFrom = (props) => {
  if (props.data) {
    let url = `https://pokeapi.co/api/v2/pokemon/${props.data.name}`;
    const { data, loading } = useFetch(url);
    const typeArry = [];
    if (!loading) {
      const types = data.data.types;
      for (const { type } of Object.values(types)) {
        typeArry.push(type.name);
      }
      console.log(data.data.name);
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
          <div className="card ">
            <div className="row">
              <div className="col-6 detail-col">
                <h5 className="stat-heading">{props.data.name}</h5>
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
                  <PokeDetails detailArr={detailArr} />
                </div>
              </div>
              <div className="col-6 poke-col">
                <button
                  onClick={() => props.setResults(data)}
                  className="btn view"
                >
                  view
                </button>
                <img
                  className="img-fluid pokemon"
                  alt={props.data.name}
                  src={data.data.sprites.other.dream_world.front_default}
                />
              </div>
            </div>
          </div>
          {data.data.name !== props.evolvesFromLast ? (
            <EvolvesFromLast
              name={props.evolvesFromLast}
              setResults={props.setResults}
            />
          ) : (
            ""
          )}
        </div>
      );
    } else {
      return (
        <div className="loading">
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      );
    }
  } else {
    return (
      <div className="EvolvesFrom">
        <div className="card no-evolve">
          {props.name} does not evolve from another pokemon
        </div>
      </div>
    );
  }
};

export default EvolvesFrom;
