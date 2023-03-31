import React from "react";
import axios from "axios";

export default function useFetch(url) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  const [data, setData] = React.useState({});

  const fetch = (config, delay) => {
    setLoading(true);
    const id = setTimeout(
      () =>
        axios(url, config)
          .then((res) => {
            setLoading(false);
            setData(res.data);
            setMsg(res.data.message);
            console.log("DATAAA", res);
          })
          .catch((err) => {
            setLoading(false);
            setError(true);
            setMsg(err.response.data);
          })
          .finally((r) => clearTimeout(id)),
      delay
    );
  };
  return { loading, error, msg, data, fetch };
}
