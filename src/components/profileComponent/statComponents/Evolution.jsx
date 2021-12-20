import React, { useState } from "react";
import { useFetch } from "./useFetch";

const Evolution = (props) => {
  console.log(props.results);
  let url = props.results.species.url;
  console.log(url);
  const { data, loading } = useFetch(url);
  console.log(data);
  return <div className="Evolution">meow</div>;
};

export default Evolution;
