import React from "react";
import { useFetch } from "../useFetch";

const Types = (props) => {
  const { data, loading } = useFetch(props.url[0]);
  if (!loading) {
    console.log(data.data);
    return <div className="Types">meow</div>;
  } else {
    return <div className="loading">Loading...</div>;
  }
};

export default Types;
