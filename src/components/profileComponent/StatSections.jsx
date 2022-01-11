import React, { useState, useContext } from "react";
import "./StatSections.css";
import BaseStats from "./statsComponents/BaseStats";
import About from "./aboutComponents/About";
import Evolution from "./evolvesComponents/Evolution";
import NavHeading from "./NavHeading";
import Items from "./Items";
import Types from "./Types";
import Moves from "./Moves";
import { useFetch } from "./useFetch";
import { ResultsContext } from "../../ResultsContext";

export default function StatSections(props) {
  const { results } = useContext(ResultsContext);
  let url = results.data.species.url;
  const { data, loading } = useFetch(url);
  const [...stats] = results.data.stats;
  const [activeTab, setActiveTab] = useState(1);
  const typeArry = [];
  const types = results.data.types;
  for (const { type } of Object.values(types)) {
    typeArry.push({ name: type.name, url: type.url });
  }
  const tabContent = [
    {
      id: 1,
      title: "about",
      content: <About />,
    },
    {
      id: 2,
      title: "stats",
      content: <BaseStats id={props.id} />,
    },
    {
      id: 3,
      title: "types",
      content: <Types typeArry={typeArry} />,
    },
    {
      id: 4,
      title: "items",
      content: <Items />,
    },
    {
      id: 5,
      title: "evolution",
      content: (
        <Evolution
          // setResults={props.setResults}
          data={data}
          loading={loading}
        />
      ),
    },
    {
      id: 6,
      title: "moves",
      content: <Moves id={props.id} />,
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
