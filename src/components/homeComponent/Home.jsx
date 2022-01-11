import React, { useState } from "react";
import Search from "./Search";
import DefaultPokeDisplay from "./DefaultPokeDisplay";
import "./Home.css";

export default function Home() {
  const [searched, setSearched] = useState(false);
  const [keyword, setKeyword] = useState("");

  return (
    <div className="Home">
      <Search
        searched={searched}
        setSearched={setSearched}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <DefaultPokeDisplay
        searched={searched}
        setSearched={setSearched}
        keyword={keyword}
        setKeyword={setKeyword}
      />
    </div>
  );
}
