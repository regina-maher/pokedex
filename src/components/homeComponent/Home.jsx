import React from "react";
import Search from "./Search";
import DefaultPokeDisplay from "./DefaultPokeDisplay";

export default function Home() {
  return (
    <div className="Home">
      <Search />
      <DefaultPokeDisplay />
    </div>
  );
}
