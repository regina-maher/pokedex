import React, { useState } from "react";
import "./StatSections.css";
import BaseStats from "./statComponents/BaseStats";
import About from "./statComponents/About";
import Evolution from "./statComponents/Evolution";
import NavHeading from "./NavHeading";
import Items from "./statComponents/Items";
import Moves from "./statComponents/Moves";

export default function StatSections(props) {
  const [...stats] = props.results.stats;
  const [activeTab, setActiveTab] = useState(1);
  const tabContent = [
    {
      id: 1,
      title: "about",
      content: <About results={props.results} />,
    },
    {
      id: 2,
      title: "stats",
      content: <BaseStats results={props.results} />,
    },
    {
      id: 3,
      title: "items",
      content: <Items results={props.results} />,
    },
    {
      id: 4,
      title: "evolution",
      content: <Evolution results={props.results} />,
    },
    {
      id: 5,
      title: "moves",
      content: <Moves results={props.results} id={props.id} />,
    },
  ];
  return (
    <div className="StatSections">
      <div className="row mb-3">
        <NavHeading
          tabContent={tabContent}
          active={activeTab}
          setActive={setActiveTab}
        />
        {tabContent[activeTab - 1].content}
      </div>
    </div>
  );
}
