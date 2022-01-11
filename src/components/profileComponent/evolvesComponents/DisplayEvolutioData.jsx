import React, { useState, useContext } from "react";
import PokeDetails from "./PokeDetails";
import Triggers from "./Triggers";
import NavHeading from "../NavHeading";
import { ResultsContext } from "../../../ResultsContext";

const DisplayEvolutioData = (props) => {
  const { setResults } = useContext(ResultsContext);

  const [activeTab, setActiveTab] = useState(1);

  const typeArry = [];
  const { types } = props.data.data;
  for (const { type } of Object.values(types)) {
    typeArry.push(type.name);
  }
  const [...moves] = props.data.data.moves;
  const detailArr = [];
  const { front_default } = props.data.data.sprites.other.dream_world;
  const { name } = props.data.data;
  const createDetailArr = ({ weight, height }) => {
    return detailArr.push(
      {
        title: "weight",
        value: weight,
      },
      {
        title: "height",
        value: height,
      },
      {
        title: "moves",
        value: moves.length,
      }
    );
  };
  createDetailArr(props.data.data);
  const tabContent = [
    {
      id: 1,
      title: "details",
      content: <PokeDetails detailArr={detailArr} />,
    },
    {
      id: 2,
      title: "triggers",
      content: <Triggers lastEvolv={props.lastEvolv} name={name} />,
    },
  ];
  return (
    <div className="DisplayEvolutioData">
      <div className="card ">
        <div className="row">
          <div className="col-6 detail-col">
            <h5 className="stat-heading">
              {props.evolvesTo ? name : props.name}
            </h5>
            <div className="d-flex justify-content-around">
              {typeArry.map((type, index) => {
                return (
                  <div id={type} key={index} className="details-type pb-2">
                    {type}
                  </div>
                );
              })}
            </div>
            <div className="row">
              {props.evolvesTo ? (
                <NavHeading
                  tabContent={tabContent}
                  active={activeTab}
                  setActive={setActiveTab}
                />
              ) : (
                <PokeDetails detailArr={detailArr} />
              )}
            </div>
          </div>
          <div className="col-6 poke-col">
            <button onClick={() => setResults(props.data)} className="btn view">
              view
            </button>
            <img
              className="img-fluid pokemon"
              alt={props.name}
              src={front_default}
            />
          </div>
          {props.evolvesTo ? tabContent[activeTab - 1].content : ""}
        </div>
      </div>
    </div>
  );
};

export default DisplayEvolutioData;
