import React from "react";
import PokeDetails from "./PokeDetails";

const DisplayEvolutioData = (props) => {
  const typeArry = [];
  const { types } = props.data.data;
  for (const { type } of Object.values(types)) {
    typeArry.push(type.name);
  }
  const [...moves] = props.data.data.moves;
  const detailArr = [];
  const createDetailArr = ({ weight, height }) => {
    return detailArr.push(
      {
        title: "weight",
        value: weight,
      },
      {
        title: "height",
        value: height,
      },
      {
        title: "moves",
        value: moves.length,
      }
    );
  };
  const { front_default } = props.data.data.sprites.other.dream_world;
  createDetailArr(props.data.data);
  return (
    <div className="DisplayEvolutioData">
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
              <PokeDetails detailArr={detailArr} />
            </div>
          </div>
          <div className="col-6 poke-col">
            <button
              onClick={() => props.setResults(props.data)}
              className="btn view"
            >
              view
            </button>
            <img
              className="img-fluid pokemon"
              alt={props.name}
              src={front_default}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayEvolutioData;
