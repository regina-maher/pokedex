import React from "react";

const Triggers = (props) => {
  if (props.lastEvolv) {
    const summayDetails = new Map([]);
    const checkDetails = (name) => {
      return name === props.lastEvolv.name
        ? props.lastEvolv.details2
        : props.lastEvolv;
    };
    const result = checkDetails(props.name);

    for (const [i, detail] of Object.entries(result)) {
      detail && summayDetails.set(i, detail);
    }
    const [...summay] = summayDetails;
    return (
      <div className="Triggers">
        {summay.map((detail, index) => {
          console.log(detail[0], detail[1]);
          return (
            <div className="d-flex" key={index}>
              <div className="details key col-7">
                {detail[0].replace("_", " ")}
              </div>
              <div className="details value col-5">
                {detail[1].name != undefined
                  ? detail[1].name.replace("-", " ")
                  : detail[1]}
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
