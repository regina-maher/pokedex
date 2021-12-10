import React from "react";
import "./PokePictures.css";

export default function PokePictures(props) {
  if (props.results) {
    const imgAlt = `Picture of ${props.results.data.forms[0].name}`;
    const picture = props.results.data.sprites.other.dream_world.front_default;
    return (
      <div className="PokePictures">
        <img src={picture} alt={imgAlt} className="img-fluid pokemon" />
      </div>
    );
  } else {
    return null;
  }
}
