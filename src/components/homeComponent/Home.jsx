import React, { useState } from "react";
import Search from "./Search";
import DefaultPokeDisplay from "./DefaultPokeDisplay";
import "./Home.css";

export default function Home() {
  const [searched, setSearched] = useState(false);

  return (
    <div className="Home">
      <Search setSearched={setSearched} />
      <DefaultPokeDisplay searched={searched} />
    </div>
  );
}
