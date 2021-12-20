import React from "react";
import "./Moves.css";
import { useFetch } from "./useFetch";

const Moves = (props) => {
  const [...moves] = props.results.moves;
  return (
    <div className="Moves">
      <div className="row ps-1">
        {moves.map((move, index) => {
          const { data, loading } = useFetch(move.move.url);
          const {
            version_group_details: [name],
          } = move;
          if (!loading) {
            return (
              <div id={props.id} className="col-6 card move ps-3" key={index}>
                <div className="move-name pt-2">{data.data.name}</div>
                <div className="row">
                  <div className="col-7 move-detail-title">
                    <ul>
                      <li>level learned at:</li>
                      <li className="break">learning method:</li>
                      <li>type:</li>
                      <li>accuracy:</li>
                      <li>damage class:</li>
                      <li>damage category:</li>
                      <li>drain:</li>
                      <li>pp:</li>
                      <li>power:</li>
                    </ul>
                  </div>
                  <div className="col-5 move-details">
                    <ul>
                      <li>{name.level_learned_at}</li>
                      <li className="break">{name.move_learn_method.name}</li>
                      <li>{data.data.type.name}</li>
                      <li>{data.data.accuracy}</li>
                      <li>{data.data.damage_class.name}</li>
                      <li>{data.data.meta.category.name}</li>
                      <li>{data.data.meta.drain}</li>
                      <li>{data.data.pp}</li>
                      <li>{data.data.power}</li>
                    </ul>
                  </div>
                </div>
                <div className="move-effect">
                  {data.data.effect_entries[0].effect}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Moves;
