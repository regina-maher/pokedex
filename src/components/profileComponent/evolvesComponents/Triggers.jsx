import React from "react";

const Triggers = (props) => {
  if (props.lastEvolv) {
    const summayDetails = new Map([]);
    for (const [i, detail] of Object.entries(props.lastEvolv)) {
      detail && summayDetails.set(i, detail);
    }
    const [...summay] = summayDetails;
    return (
      <div className="Triggers">
        {summay.map((detail, index) => {
          return (
            <div className="d-flex" key={index}>
              <div className="details key col-7">{detail[0]}: </div>
              <div className="details value col-5">
                {detail[1].name != undefined ? detail[1].name : detail[1]}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Triggers;
