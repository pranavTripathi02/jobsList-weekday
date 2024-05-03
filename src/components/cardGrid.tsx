import { useEffect, useState } from "react";
import { Tjob, useGetJobsMutation } from "../store/api/apiSlice";
import { Container, Stack } from "@mui/material";
import JobCard from "./card/jobCard";
import LoadingSkel from "./loadingSkel";

function CardGrid() {
  const [offset, setOffset] = useState(0);
  const [getJobs, { isLoading }] = useGetJobsMutation();
  const [jobs, setJobs] = useState<Tjob[]>([]);

  const fetchJobs = async () => {
    try {
      const res = await getJobs({ offset }).unwrap();
      console.log(res);
      setJobs((prevJobs) => prevJobs.concat(res.jobs));
      setOffset((prev) => prev + 10);
    } catch (err) {
      console.error("Error fetching jobs", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Container maxWidth="xl">
      {jobs && (
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={4}
          justifyContent="center"
        >
          {jobs.map((job) => (
            <JobCard
              key={job.jdUid}
              jobInfo={job}
            />
          ))}
          {isLoading && <LoadingSkel />}
        </Stack>
      )}
    </Container>
  );
}

export default CardGrid;
