import "./App.css";
import { useEffect, useState } from "react";
import { useGetJobsMutation } from "./store/api/apiSlice";

function App() {
  const [offset, setOffset] = useState(0);
  const [getJobs, { isLoading }] = useGetJobsMutation();

  const fetchJobs = async () => {
    try {
      const res = await getJobs({ offset });
      console.log(res, offset);
      setOffset((prev) => prev + 10);
    } catch (err) {
      console.error("Error fetching jobs", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return <>{isLoading ? <div>Loading...</div> : <div>Got Jobs!</div>}</>;
}

export default App;
