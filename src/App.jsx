import "./App.css";
import Home from "./components/homeComponent/Home";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [results, setResults] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home results={results} setResults={setResults} />}
        />
      </Routes>
    </div>
  );
}

export default App;
