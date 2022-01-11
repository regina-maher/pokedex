import "./App.css";
import Home from "./components/homeComponent/Home";
import Profile from "./components/profileComponent/Profile";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useMemo } from "react";
import { ResultsContext } from "./ResultsContext";

function App() {
  const [results, setResults] = useState("");
  const value = useMemo(() => ({ results, setResults }), [results, setResults]);
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
      <ResultsContext.Provider value={value}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Profile" element={<Profile />} />
        </Routes>
      </ResultsContext.Provider>
    </div>
  );
}

export default App;
