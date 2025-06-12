import { useEffect, useState } from 'react';

const useFetch = (apipath, queryterm = "") => {
  const [data, setData] = useState([]);
  const key = import.meta.env.VITE_API_KEY;

  const url = `https://api.themoviedb.org/3/${apipath}?api_key=${key}&query=${queryterm}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url); 
        const json = await res.json(); 
        
        setData(json.results || []); 
      } catch (error) {
        console.error("Fetching data failed:", error);
        setData([]); 
      }
    }

    fetchData();
  }, [url]);

  return { data }; 
};

export default useFetch;
