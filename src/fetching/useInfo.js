import { useState, useEffect } from "react";
import axios from "axios";

export default function useInfo(url) {
  const [data, setData] = useState([]);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [error, setError] = useState("");

  function handleRuntime(clock) {
    let hours = clock / 60;
    const new_hour = Math.trunc(hours);
    let minutes = Math.round((hours - Math.trunc(hours)) * 60);

    setHour(new_hour);
    setMinutes(minutes);
  }

  useEffect(() => {
    async function fetching() {
      try {
        const remote_url = await axios.get(url);
        setData(remote_url.data);
        handleRuntime(remote_url.data["runtime"]);
      } catch (error) {
        setError(error);
      }
    }
    fetching();
  }, [url]);

  return { hour, minutes, data, error };
}
