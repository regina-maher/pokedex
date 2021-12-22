import "./App.css";
import Home from "./components/homeComponent/Home";
import Profile from "./components/profileComponent/Profile";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [results, setResults] = useState("");
  // const [results, setResults] = useState(() =>
  //   JSON.parse(localStorage.getItem("results"))
  // );
  // useEffect(() => {
  //   localStorage.setItem("results", JSON.stringify(results));
  // }, [results]);
  const LOCAL_STORAGE_KEY = "results";
  useEffect(() => {
    const storageResults = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageResults) {
      setResults(storageResults);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(results));
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
