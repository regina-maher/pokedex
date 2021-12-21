import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState((state) => ({
      data: state.data,
      loading: true,
    }));
    const fetchData = async () => {
      const data = await axios.get(url);
      setState({ data: data, loading: false });
    };
    fetchData();
  }, [url, setState]);
  return state;
};
