import React from "react";
import { useFetch } from "../useFetch";
import "./Types.css";

const Types = (props) => {
  const typeTitles = [
    "damage class",
    "2 x damage from ❗",
    "1/2 x damage to ❗",
    "no damage to ❗",
    "2 x damage to ✔️",
    "1/2 x damage from ✔️",
    "no damage from ✔️",
  ];
  const damageArr = [];
  if (props.typeArry) {
    return (
      <div className="Types">
        <div className="row">
          <div className="col-4 titles">
            <ul className="title-section">
              {typeTitles.map((title, index) => {
                return (
                  <li key={index} className="type-title">
                    {title}:
                  </li>
                );
              })}
            </ul>
          </div>
          {props.typeArry.map((type, index) => {
            const { data, loading } = useFetch(type.url);
            if (!loading) {
              let damage = data.data.damage_relations;
              return (
                <div key={index} className="col-4 results">
                  <h5 className="stat-heading ps-2 pb-2">{type.name}</h5>
                  <ul>
                    <li className="type-results">
                      {data.data.move_damage_class.name}
                    </li>
                    <li className="type-results">
                      {damage.double_damage_from[0]?.name ?? "n/a"}{" "}
                      {damage.double_damage_from[1]?.name}
                    </li>
                    <li className="type-results">
                      {damage.half_damage_to[0]?.name ?? "n/a"}{" "}
                      {damage.half_damage_to[1]?.name}
                    </li>
                    <li className="type-results">
                      {damage.no_damage_to[0]?.name ?? "n/a"}{" "}
                      {damage.no_damage_to[1]?.name}
                    </li>
                    <li className="type-results">
                      {damage.double_damage_to[0]?.name ?? "n/a"}{" "}
                      {damage.double_damage_to[1]?.name}
                    </li>
                    <li className="type-results">
                      {damage.half_damage_to[0]?.name ?? "n/a"}{" "}
                      {damage.half_damage_to[1]?.name}
                    </li>
                    <li className="type-results">
                      {damage.no_damage_from[0]?.name ?? "n/a"}{" "}
                      {damage.no_damage_from[1]?.name}
                    </li>
                  </ul>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Types;
