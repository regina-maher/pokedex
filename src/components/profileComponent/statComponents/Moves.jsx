import React from "react";
import "./Moves.css";

const Moves = (props) => {
  const [...moves] = props.results.moves;
  console.log(moves);
  return (
    <div className="Moves">
      <div className="row ps-1">
        {moves.map((move, index) => {
          return (
            <div className="col-3 move" key={index}>
              {index + 1}:<span>{move.move.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Moves;
