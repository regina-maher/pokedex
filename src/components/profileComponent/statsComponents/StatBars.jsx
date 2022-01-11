import React, { useState, useEffect, useContext } from "react";
import ProgressBar from "./ProgressBar";

function StatBars(props) {
  const [skillBar, setSkillBar] = useState([]);

  let styles = [];
  function createBars() {
    for (let i = 0; i < props.stats.length; i++) {
      styles.push({
        completed: props.stats[i].base_stat,
      });
    }
    setSkillBar(styles);
  }
  useEffect(() => {
    createBars();
  }, []);
  return (
    <div className="StatBars">
      <div className="row pt-3">
        {skillBar.map((item, index) => (
          <div key={index} className="col-sm bar">
            <ProgressBar id={props.id} completed={item.completed} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatBars;
