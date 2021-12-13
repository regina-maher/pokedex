import React from "react";
import "./PokemonFindings.css";
import PokePictures from "./PokePictures";
import pokeball from "../../images/pokeball.jpg";
import AbilitiesSummary from "./AbilitiesSummary";
import StatSummary from "./StatSummary";
import { Link } from "react-router-dom";

export default function PokemonFindings(props) {
  if (props.results) {
    const [...types] = props.results.data.types;
    return (
      <div className="PokemonFindings" id={types[0].type.name}>
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-between">
              <h2 className="subheading pe-4">
                {props.results.data.forms[0].name}
              </h2>
              <Link to="../profile">
                <button className="btn pt-3">explore >></button>
              </Link>
            </div>
            <div className="d-flex justify-content-evenly">
              <StatSummary results={props.results} />
              <AbilitiesSummary results={props.results} />
            </div>
          </div>
          <div className="col-6">
            <img
              src={pokeball}
              alt="pokeball icon"
              className="img-fluid pokeball rotate"
            />
            <PokePictures results={props.results} />
          </div>
        </div>
        <div className="poke-details d-flex justify-content-start">
          {types.map((type, index) => {
            return (
              <div key={index} id={type.type.name} className="poke-type">
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
