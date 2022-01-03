import React from "react";

const PokeDetails = (props) => {
  return (
    <div className="PokeDetails">
      {props.detailArr.map((detail, index) => {
        return (
          <div className="d-flex" key={index}>
            <div className="details col-8">{detail.title}: </div>
            <div className="details col-4">{detail.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PokeDetails;
