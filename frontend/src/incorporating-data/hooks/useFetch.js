import { useState, useEffect } from "react";

export default function useFetch(uri) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("uri", uri);

  useEffect(() => {
    if (!uri) return;

    const fetchData = async () => {
      try {
        const data = await fetch(uri);
        console.log("fetchData", data);
        const json = await data.json();
        setData(json);
        setLoading(false);
      } catch {
        setError("Error fetching data");
        setLoading(false);
      }
    };
    fetchData();
  }, [uri]);

  return { data, loading, error };
}
