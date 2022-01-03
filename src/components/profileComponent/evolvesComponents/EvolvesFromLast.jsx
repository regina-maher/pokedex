import React from "react";
import { useFetch } from "../useFetch";
import Loader from "react-loader-spinner";

const EvolvesFromLast = (props) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${props.name}`;
  const { data, loading } = useFetch(url);
  const typeArry = [];
  if (!loading) {
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
      <div className="EvolvesFromLast">
        <div className="card ">
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
    return (
      <div className="loading">
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
};

export default EvolvesFromLast;
