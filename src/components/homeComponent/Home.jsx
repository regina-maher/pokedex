import React, { useState } from "react";
import Search from "./Search";
import axios from "axios";
import DefaultPokeDisplay from "./DefaultPokeDisplay";

export default function Home() {
  const [results, setResults] = useState("");
  function search(keyword) {
    let apiUrl = ` https://pokeapi.co/api/v2/pokemon/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setResults(response);
  }
  return (
    <div className="Home">
      <Search
        search={search}
        handleResponse={handleResponse}
        results={results}
      />
      <DefaultPokeDisplay search={search} />
    </div>
  );
}
