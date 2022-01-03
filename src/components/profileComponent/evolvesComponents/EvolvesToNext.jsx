import React, { useState } from "react";
import { useFetch } from "../useFetch";
import PokeDetails from "./PokeDetails";
import Triggers from "./Triggers";
import NavHeading from "../NavHeading";

const EvolvesToNext = (props) => {
  const [activeTab, setActiveTab] = useState(1);

  if (props.nextEvolv.name) {
    const { data, loading } = useFetch(
      `https://pokeapi.co/api/v2/pokemon/${props.nextEvolv.name}`
    );
    const typeArry = [];
    if (!loading) {
      const types = data.data.types;
      for (const { type } of Object.values(types)) {
        typeArry.push(type.name);
      }
      const [...moves] = data.data.moves;
      const detailArr = [
        {
          title: "weight",
          value: data.data.weight,
        },
        {
          title: "height",
          value: data.data.height,
        },
        {
          title: "moves",
          value: moves.length,
        },
      ];
      const tabContent = [
        {
          id: 1,
          title: "details",
          content: <PokeDetails detailArr={detailArr} />,
        },
        {
          id: 2,
          title: "triggers",
          content: <Triggers lastEvolv={props.lastEvolv} />,
        },
      ];
      return (
        <div className="EvolvesToNext">
          <div className="card mt-1 mb-3">
            <div className="row">
              <div className="col-6 detail-col">
                <h5 className="stat-heading">{props.nextEvolv.name}</h5>
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
                  <NavHeading
                    tabContent={tabContent}
                    active={activeTab}
                    setActive={setActiveTab}
                  />
                </div>
              </div>
              <div className="col-6 poke-col">
                <button
                  onClick={() => props.setResults(data)}
                  className="btn view"
                >
                  view
                </button>
                <img
                  className="img-fluid pokemon"
                  alt={props.nextEvolv.name}
                  src={data.data.sprites.other.dream_world.front_default}
                />
              </div>
              {tabContent[activeTab - 1].content}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  } else {
    return (
      <div className="EvolvesToNext">
        <h5 className="stat-heading ps-2 pb-3">Evolves from</h5>
        <div className="card no-evolve">
          {props.OGName} does not evolve to another pokemon
        </div>
      </div>
    );
  }
};

export default EvolvesToNext;
