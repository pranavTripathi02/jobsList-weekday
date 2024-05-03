import { useEffect, useRef, useState } from "react";
import { Tjob, useGetJobsMutation } from "../store/api/apiSlice";
import { Container, Stack } from "@mui/material";
import JobCard from "./card/jobCard";
import LoadingCards from "./loadingCards";

function CardGrid() {
  const [offset, setOffset] = useState(0);
  const [getJobs, { isLoading, status }] = useGetJobsMutation();
  const [jobs, setJobs] = useState<Tjob[]>([]);

  const observerTarget = useRef<HTMLDivElement>(null);

  // fetch jobs from api using offset
  const fetchJobs = async () => {
    if (!isLoading) {
      try {
        const res = await getJobs({ offset }).unwrap();
        setJobs((prevJobs) => [...prevJobs, ...res.jobs]);
        console.log("fetching heres 2", status);
      } catch (err) {
        console.error("Error fetching jobs", err);
      }
    }
  };

  // update offset when scrolled to end of page
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setOffset((prev) => prev + 10);
        }
      },
      { threshold: 1 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  // fetchJobs on offset change
  useEffect(() => {
    fetchJobs();
  }, [offset]);

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
          {isLoading && <LoadingCards />}
          <div ref={observerTarget}></div>
        </Stack>
      )}
    </Container>
  );
}

export default CardGrid;
