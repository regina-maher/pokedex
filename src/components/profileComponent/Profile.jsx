import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import pokeball from "../../images/pokeball.jpg";
import StatSections from "./StatSections";

export default function Profile(props) {
  if (props.results !== "") {
    const [...types] = props.results.types;
    const mainType = types[0].type.name;
    return (
      <div className="Profile" id={mainType}>
        <section className="intro-banner">
          <Link to="/" className="home-link">
            <i className="fas fa-home" />
          </Link>
          <div className="type-summary row">
            <div className="col-5">
              <h2 className="subheading pe-4">{props.results.forms[0].name}</h2>
              <ul className="d-flex justify-content-evenly">
                {types.map((type, index) => {
                  return (
                    <li key={index} className="listed-ability">
                      {type.type.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-7">
              <img
                src={props.results.sprites.other.dream_world.front_default}
                alt={props.results.forms[0].name}
                className="img-fluid pokemon"
              />
              <img
                src={pokeball}
                alt="pokeball icon"
                className="img-fluid pokeball rotate"
              />
            </div>
          </div>
        </section>
        <section className="poke-stats">
          <StatSections results={props.results} id={mainType} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
