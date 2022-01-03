import React, { useState, useEffect } from "react";
import "./Search.css";
import Pokeball from "../../images/pokeball.jpg";
import PokemonFindings from "./PokemonFindings";
import axios from "axios";

export default function Search(props) {
  const [loaded, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState(false);
  const search = () => {
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${props.keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function (error) {
        error.response.data && setError(true);
      });
  };
  const handleResponse = (response) => {
    props.setResults(response);
    setError(false);
    props.setSearched(true);
  };
  const load = () => {
    setLoading(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };
  useEffect(() => {
    setError(false);
  }, [props.results]);
  if (loaded) {
    return (
      <div className="Search">
        <div className="container-fluid">
          <div className={props.searched || error ? "hide" : ""}>
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
          <div className={props.search ? "hide" : ""}>
            <div className={error ? "error-message pt-5 pb-5" : "hide"}>
              <h2 className="heading text-center">
                <i class="fas fa-exclamation-triangle"></i>
                Hmmm... we cannot find your pokemon
                <br />
                <br />
                Check your spelling!
              </h2>
              <img
                src={Pokeball}
                className="img-fluid pokeball-icon"
                alt="silhouette icon of a pokeball"
              />
            </div>
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
                onChange={(e) => props.setKeyword(e.target.value)}
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
