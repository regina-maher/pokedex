import React, { useState } from "react";
import Search from "./Search";
import DefaultPokeDisplay from "./DefaultPokeDisplay";
import "./Home.css";

export default function Home(props) {
  const [searched, setSearched] = useState(false);

  return (
    <div className="Home">
      <Search
        searched={searched}
        setSearched={setSearched}
        results={props.results}
        setResults={props.setResults}
      />
      <DefaultPokeDisplay searched={searched} />
    </div>
  );
}
