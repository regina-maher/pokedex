import React, { useState } from "react";
import "./StatSections.css";
import BaseStats from "./statComponents/BaseStats";
import About from "./statComponents/About";
import NavHeading from "./NavHeading";

export default function StatSections(props) {
  const [...stats] = props.results.stats;
  const [active, setActive] = useState([true, false, false, false]);

  return (
    <div className="StatSections">
      <div className="row mb-3">
        <NavHeading active={active} setActive={setActive} />
      </div>
      {active[0] ? <About results={props.results} /> : null}
      {active[1] ? <BaseStats results={props.results} /> : null}
    </div>
  );
}
