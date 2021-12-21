import React, { useState } from "react";
import "./StatSections.css";
import BaseStats from "./statsComponents/BaseStats";
import About from "./aboutComponents/About";
import Evolution from "./evolvesComponents/Evolution";
import NavHeading from "./NavHeading";
import Items from "./Items";
import Moves from "./Moves";
import { useFetch } from "./useFetch";

export default function StatSections(props) {
  let url = props.results.species.url;
  const { data, loading } = useFetch(url);
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
      content: <BaseStats results={props.results} id={props.id} />,
    },
    {
      id: 3,
      title: "items",
      content: <Items results={props.results} />,
    },
    {
      id: 4,
      title: "evolution",
      content: (
        <Evolution results={props.results} data={data} loading={loading} />
      ),
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
