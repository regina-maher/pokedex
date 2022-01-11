import React, { useContext } from "react";
import "./Moves.css";
import { useFetch } from "./useFetch";
import { ResultsContext } from "../../ResultsContext";

const Moves = (props) => {
  const { results } = useContext(ResultsContext);
  const [...moves] = results.data.moves;
  return (
    <div className="Moves">
      <div className="row ps-1">
        {moves.map((move, index) => {
          const { data, loading } = useFetch(move.move.url);
          const {
            version_group_details: [name],
          } = move;
          if (!loading) {
            const moveArr = [
              {
                title: "level learned at",
                value: name.level_learned_at,
              },
              {
                title: "learning method",
                value: name.move_learn_method.name,
              },
              {
                title: "type",
                value: data.data.type.name,
              },
              {
                title: "accuracy",
                value: data.data.accuracy,
              },
              {
                title: "damage class",
                value: data.data.damage_class.name,
              },
              {
                title: "damage category",
                value: data.data.meta.category.name,
              },
              {
                title: "drain",
                value: data.data.meta.drain,
              },
              {
                title: "pp",
                value: data.data.pp,
              },
              {
                title: "power",
                value: data.data.power,
              },
            ];
            return (
              <div id={props.id} className="col-6 card move ps-3" key={index}>
                <div className="move-name pt-2">{data.data.name}</div>
                <div className="row">
                  {moveArr.map((move, index) => {
                    return (
                      <div key={index} className="d-flex">
                        <div className="move-detail-title col-7">
                          {move.title}
                        </div>
                        <div className="move-details col-5">{move.value}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="move-effect pt-3">
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
