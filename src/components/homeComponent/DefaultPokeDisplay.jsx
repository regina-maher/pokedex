import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DefaultPokeDisplay() {
  const pokeKeys = ["pikachu", "bulbasaur", "charmander", "squirtle"];
  const pokeApiArray = [];
  const [pokeDataArray, setPokeDataArray] = useState([]);
  let pikachuData, bulbasaurData, charmanderData, squirtleData;

  function fetchData() {
    for (let i = 0; i < pokeKeys.length; i++) {
      pokeApiArray.push(` https://pokeapi.co/api/v2/pokemon/${pokeKeys[i]}`);
    }
    axios
      .all([
        axios.get(pokeApiArray[0]),
        axios.get(pokeApiArray[1]),
        axios.get(pokeApiArray[2]),
        axios.get(pokeApiArray[3]),
      ])
      .then(
        axios.spread((...allData) => {
          pikachuData = allData[0].data;
          bulbasaurData = allData[1].data;
          charmanderData = allData[2].data;
          squirtleData = allData[3].data;
          organiseData(
            pikachuData,
            bulbasaurData,
            charmanderData,
            squirtleData
          );
        })
      );
  }
  function organiseData(
    pikachuData,
    bulbasaurData,
    charmanderData,
    squirtleData
  ) {
    const [...pikachuTypes] = pikachuData.types;
    const [...bulbasaurTypes] = bulbasaurData.types;
    const [...charmanderTypes] = charmanderData.types;
    const [...squirtleTypes] = squirtleData.types;
    setPokeDataArray([
      {
        name: pikachuData.species.name,
        types: pikachuTypes,
        img: pikachuData.sprites.other.dream_world.front_default,
      },
      {
        name: bulbasaurData.species.name,
        types: bulbasaurTypes,
        img: bulbasaurData.sprites.other.dream_world.front_default,
      },
      {
        name: charmanderData.species.name,
        types: charmanderTypes,
        img: charmanderData.sprites.other.dream_world.front_default,
      },
      {
        name: squirtleData.species.name,
        types: squirtleTypes,
        img: squirtleData.sprites.other.dream_world.front_default,
      },
    ]);
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(pokeDataArray);
  return (
    <div className="DefaultPokeDisplay">
      <div className="row">
        <div className="col-6"></div>
      </div>
    </div>
  );
}
