import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import pokeball from "../../images/pokeball.jpg";
import StatSections from "./StatSections";
import { ResultsContext } from "../../ResultsContext";

export default function Profile() {
  const { results } = useContext(ResultsContext);
  if (results !== "") {
    const [...types] = results.data.types;
    const mainType = types[0].type.name;
    return (
      <div className="Profile" id={mainType}>
        <section className="intro-banner">
          <Link to="/" className="home-link">
            🏠
          </Link>
          <div className="type-summary row">
            <div className="col-5">
              <h2 className="subheading pe-4">{results.data.forms[0].name}</h2>
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
                src={results.data.sprites.other.dream_world.front_default}
                alt={results.data.forms[0].name}
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
          <StatSections id={mainType} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
