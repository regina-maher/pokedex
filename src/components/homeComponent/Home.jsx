import React from "react";
import Search from "./Search";
import DefaultPokeDisplay from "./DefaultPokeDisplay";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <Search />
      <DefaultPokeDisplay />
    </div>
  );
}
