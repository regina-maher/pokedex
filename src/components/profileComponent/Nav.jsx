import React, { useState } from "react";

function Nav() {
  const [statHeading, setStatHeading] = useState([
    { id: 0, active: true, title: "about" },
    { id: 1, active: false, title: "base stats" },
    { id: 2, active: false, title: "evolution" },
    { id: 3, active: false, title: "moves" },
  ]);
  let headingCopy = [];
  function changeHeading(id) {
    headingCopy = statHeading;
    for (let i = 0; i < headingCopy.length; i++) {
      if (headingCopy[i].active) {
        headingCopy[i].active = false;
      }
    }
    headingCopy[id].active = true;
    setStatHeading(headingCopy);
    console.log(statHeading);
  }
  return (
    <div>
      {statHeading.map((heading, index) => {
        return (
          <div
            key={index}
            onClick={() => changeHeading(heading.id)}
            className="col pt-2 text-center "
          >
            <button className="">
              <h3
                className={
                  heading.active
                    ? "active stat-heading"
                    : "inactive stat-heading"
                }
              >
                {heading.title}
              </h3>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Nav;
