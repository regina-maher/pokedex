import "./App.css";
import Home from "./components/homeComponent/Home";
import Profile from "./components/profileComponent/Profile";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [results, setResults] = useState(() =>
    JSON.parse(localStorage.getItem("results") || "")
  );
  useEffect(() => {
    localStorage.setItem("results", JSON.stringify(results));
  }, [results]);
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home results={results || ""} setResults={setResults} />}
        />
        <Route
          exact
          path="Profile"
          element={<Profile results={results.data || ""} />}
        />
      </Routes>
    </div>
  );
}

export default App;
