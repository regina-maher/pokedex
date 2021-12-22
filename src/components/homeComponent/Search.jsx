import React, { useState } from "react";
import "./Search.css";
import Pokeball from "../../images/pokeball.jpg";
import PokemonFindings from "./PokemonFindings";
import axios from "axios";

export default function Search(props) {
  const [loaded, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const search = () => {
    let apiUrl = ` https://pokeapi.co/api/v2/pokemon/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    props.setSearched(true);
  };
  const handleResponse = (response) => {
    props.setResults(response);
  };
  const load = () => {
    setLoading(true);
  };
  const updateWord = (response) => {
    setKeyword(response.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };
  const resetHome = () => {
    props.setResults("");
    props.setSearched(false);
  };

  if (loaded) {
    return (
      <div className="Search">
        <div className="container-fluid">
          {props.search ? (
            <button onClick={resetHome}>
              <i className="fas fa-home" />
            </button>
          ) : (
            ""
          )}
          <div className={props.searched ? "hide" : ""}>
            <div className="d-flex justify-content-between">
              <h1 className="title">Pokedex</h1>
              <img
                src={Pokeball}
                className="img-fluid pokeball-icon"
                alt="silhouette icon of a pokeball"
              />
            </div>
            <h2 className="heading text-center">
              All your poke-detail needs in one place
            </h2>
          </div>
          <div className={props.searched ? "searched" : "searched hide"}>
            <h2 className="heading text-center">LOOK!</h2>
            <h2 className="heading text-center">We found your Pokemon</h2>
            <img
              src={Pokeball}
              className="img-fluid pokeball-icon"
              alt="silhouette icon of a pokeball"
            />
          </div>
          <div className="input-icons">
            <form className="d-flex" onSubmit={handleSubmit}>
              <i className="fas fa-search" />
              <input
                type="search"
                className="form search-input form-control"
                placeholder="Search for a Pokemon..."
                autoFocus={true}
                onChange={updateWord}
              />
            </form>
          </div>
          {props.searched ? <PokemonFindings results={props.results} /> : ""}
        </div>
      </div>
    );
  } else {
    load();
    return <h1 className="title">Pokédex</h1>;
  }
}
