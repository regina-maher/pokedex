import React, { useState } from "react";
import "./Search.css";
import Pokeball from "../../images/pokeball.jpg";
import PokemonFindings from "./PokemonFindings";

export default function Search(props) {
  const [loaded, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  function load() {
    setLoading(true);
  }
  function updateWord(response) {
    setKeyword(response.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.search(keyword);
  }
  if (loaded) {
    return (
      <div className="Search">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <h1 className="heading">What Pokemon are you looking for?</h1>
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
                placeholder="Search a Pokemon..."
                autoFocus={true}
                onChange={updateWord}
              />
            </form>
          </div>
          <PokemonFindings results={props.results} />
        </div>
      </div>
    );
  } else {
    load();
    return <h1 className="title">Pokédex</h1>;
  }
}