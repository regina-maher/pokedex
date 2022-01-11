import React, { useContext } from "react";
import "./PokePictures.css";
import { ResultsContext } from "../../ResultsContext";

export default function PokePictures(props) {
  const { results } = useContext(ResultsContext);

  if (results) {
    const imgAlt = `Picture of ${results.data.forms[0].name}`;
    const picture = results.data.sprites.other.dream_world.front_default;
    return (
      <div className="PokePictures">
        <img src={picture} alt={imgAlt} className="img-fluid pokemon" />
      </div>
    );
  } else {
    return null;
  }
}
