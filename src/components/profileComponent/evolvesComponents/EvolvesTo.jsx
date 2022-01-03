import React, { useState } from "react";
import { useFetch } from "../useFetch";
import "./EvolvesTo.css";
import EvolvesToNext from "./EvolvesToNext";
import PokeDetails from "./PokeDetails";

const EvolvesTo = (props) => {
  const [triggers, setTriggers] = useState(false);
  if (props.lastEvolv.name) {
    console.log(props);
    const { data, loading } = useFetch(
      `https://pokeapi.co/api/v2/pokemon/${props.lastEvolv.name}`
    );
    const typeArry = [];
    if (!loading) {
      console.log(data.data);
      const types = data.data.types;
      for (const { type } of Object.values(types)) {
        typeArry.push(type.name);
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
          {props.nextEvolv.name !== props.OGName ? (
            <EvolvesToNext nextEvolv={props.nextEvolv} />
          ) : null}
          <div className="card mb-2">
            <div className="row">
              <div className="col-6 detail-col">
                <h5 className="stat-heading">{props.lastEvolv.name}</h5>
                <div className="d-flex justify-content-around">
                  {typeArry.map((type, index) => {
                    return (
                      <div id={type} key={index} className="details-type pb-2">
                        {type}
                      </div>
                    );
                  })}
                </div>

                <div className={triggers ? "hide" : "row"}>
                  <PokeDetails detailArr={detailArr} />
                </div>
              </div>
              <div className="col-6 poke-col">
                <img
                  className="img-fluid pokemon"
                  alt={props.lastEvolv.name}
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
      <div className="EvolvesTo">
        <div className="card no-evolve">
          {props.OGName} does not evolve to another pokemon
        </div>
      </div>
    );
  }
};
export default EvolvesTo;
