import React, { useState } from "react";
import axios from "axios";

export default function Pikachu() {
  let name, img;
  function retrieveData(keyword) {
    let apiUrl = ` https://pokeapi.co/api/v2/pokemon/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    const [...types] = response.data.types;
    name = response.data.species.name;
    img = response.data.sprites.other.dream_world.front_default;
    return name, img, types;
  }
  retrieveData("pikachu");
  console.log(name);
  return <div className="Pikachu"></div>;
}
