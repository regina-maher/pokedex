import React from "react";
import { useFetch } from "../useFetch";
import "./EvolvesTo.css";

const EvolvesTo = (props) => {
  console.log(props);
  const { data, loading } = useFetch(props.url);
  if (!loading) {
    console.log(data.data);
    return (
      <div className="EvolvesTo">
        <h5 className="stat-heading ps-2 pb-3">Evolves to</h5>
        <div className="card">
          <h5 className="stat-heading">{props.name}</h5>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default EvolvesTo;
