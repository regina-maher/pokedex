import React from "react";
import "./PokemonFindings.css";
import PokePictures from "./PokePictures";
import pokeball from "../images/pokeball.jpg";

export default function PokemonFindings(props) {
  if (props.results) {
    const [...types] = props.results.data.types;
    console.log(props.results.data);
    return (
      <div className="PokemonFindings" id={types[0].type.name}>
        <div className="d-flex justify-content-between">
          <h2 className="subheading">{props.results.data.forms[0].name}</h2>
          <img
            src={pokeball}
            alt="pokeball icon"
            className="img-fluid pokeball"
          />
          <PokePictures results={props.results} />
        </div>
        <div className="poke-details d-flex">
          {types.map((type, index) => {
            return (
              <div key={index} id={type.type.name} className="poke-type btn">
                {type.type.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
