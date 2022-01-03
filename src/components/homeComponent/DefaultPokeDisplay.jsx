import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DefaultPokeDisplay.css";
import pokeball from "../../images/pokeball.jpg";
import { useFetch } from "../profileComponent/useFetch";

export default function DefaultPokeDisplay(props) {
  const pokeKeys = ["pikachu", "bulbasaur", "charmander", "squirtle"];
  const pokeApiArray = [];
  const pokeTypes = [];
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
          spreadTypes(pikachuData, bulbasaurData, charmanderData, squirtleData);
        })
      );
  }
  function spreadTypes(
    pikachuData,
    bulbasaurData,
    charmanderData,
    squirtleData
  ) {
    const [...pikachuTypes] = pikachuData.types;
    const [...bulbasaurTypes] = bulbasaurData.types;
    const [...charmanderTypes] = charmanderData.types;
    const [...squirtleTypes] = squirtleData.types;
    for (const { ...pika } of Object.values(pikachuTypes)) {
      pokeTypes.push({ pikachu: pika.type.name });
    }
    for (const { ...bulb } of Object.values(bulbasaurTypes)) {
      pokeTypes.push({ bulbasaur: bulb.type.name });
    }
    for (const { ...char } of Object.values(charmanderTypes)) {
      pokeTypes.push({ charmander: char.type.name });
    }
    for (const { ...squirt } of Object.values(squirtleTypes)) {
      pokeTypes.push({ squirtle: squirt.type.name });
    }
    organiseData(
      pikachuData,
      bulbasaurData,
      charmanderData,
      squirtleData,
      pokeTypes
    );
  }
  function organiseData(
    pikachuData,
    bulbasaurData,
    charmanderData,
    squirtleData,
    pokeTypes
  ) {
    setPokeDataArray([
      {
        name: pikachuData.species.name,
        types: [pokeTypes[0].pikachu],
        img: pikachuData.sprites.other.dream_world.front_default,
      },
      {
        name: bulbasaurData.species.name,
        types: [pokeTypes[1].bulbasaur, pokeTypes[2].bulbasaur],
        img: bulbasaurData.sprites.other.dream_world.front_default,
      },
      {
        name: charmanderData.species.name,
        types: [pokeTypes[3].charmander],
        img: charmanderData.sprites.other.dream_world.front_default,
      },
      {
        name: squirtleData.species.name,
        types: [pokeTypes[4].squirtle],
        img: squirtleData.sprites.other.dream_world.front_default,
      },
    ]);
  }
  let url;
  if (props.keyword.length > 0) {
    url = `https://pokeapi.co/api/v2/pokemon/${props.keyword}`;
  }
  const { data, loading } = useFetch(url);
  if (!loading) {
    props.setResults(data);
    props.setSearched(true);
  }
  useEffect(() => {
    fetchData();
  }, []);
  if (!props.searched) {
    return (
      <div className="DefaultPokeDisplay">
        <div className="row">
          {pokeDataArray.map((poke, index) => {
            return (
              <div key={index} className="col-6">
                <div
                  id={poke.types.length >= 1 ? poke.types[0] : poke.types}
                  onClick={() => props.setKeyword(poke.name)}
                  className="d-flex tab justify-content-around"
                >
                  <div className="body">
                    <h5 className="subheading">{poke.name}</h5>
                    <ul>
                      <li>
                        {poke.types.length >= 1 ? poke.types[0] : poke.types}
                      </li>
                    </ul>
                  </div>
                  <img
                    src={poke.img}
                    alt={poke.name}
                    className="img-fluid poke-default"
                  />
                  <img
                    src={pokeball}
                    alt="pokeball icon"
                    className="img-fluid pokeball rotate"
                  />
                </div>
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
