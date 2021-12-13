import React, { useState } from "react";

export default function NavbarProfile() {
  const [navbar, setNavbar] = useState([
    {
      id: 0,
      active: true,
      heading: "about",
    },
    {
      id: 0,
      active: false,
      heading: "base stats",
    },
    {
      id: 0,
      active: false,
      heading: "evolution",
    },
    {
      id: 0,
      active: false,
      heading: "moves",
    },
  ]);
  function changeNav(id) {
    for (let i = 0; i < navbar.length; i++) {
      if (navbar[i].active) {
        navbar[i].active = false;
      }
    }
    navbar[id].active = true;
    setNavbar(...navbar);
    console.log(navbar);
  }
  return (
    <div className="NavbarProfile">
      <ul className="nav">
        {navbar.map((nav, index) => {
          return (
            <li key={index} className={nav.active ? "active" : "inactive"}>
              <button onClick={() => changeNav(nav.id)}>{nav.heading}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
