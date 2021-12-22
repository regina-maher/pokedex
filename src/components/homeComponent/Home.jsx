import React, { useState } from "react";
import Search from "./Search";
import DefaultPokeDisplay from "./DefaultPokeDisplay";
import "./Home.css";

export default function Home(props) {
  const [searched, setSearched] = useState(false);
  const [keyword, setKeyword] = useState("");

  return (
    <div className="Home">
      <Search
        searched={searched}
        setSearched={setSearched}
        results={props.results}
        setResults={props.setResults}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <DefaultPokeDisplay
        searched={searched}
        setSearched={setSearched}
        setResults={props.setResults}
        keyword={keyword}
        setKeyword={setKeyword}
      />
    </div>
  );
}
