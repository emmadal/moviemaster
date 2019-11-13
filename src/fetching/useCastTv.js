import { useState, useEffect } from "react";
import axios from "axios";

export default function useCastTv(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    
    async function fetching() {
      try {
        const remote_url = await axios.get(url);
        setData(remote_url.data.cast);
      } catch (error) {
        setError(error);
      }
    }
    fetching();
    
  }, [url]);
  return { data, error };
}
