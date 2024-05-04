import { useEffect, useRef, useState } from "react";
import { Tjob, useGetJobsMutation } from "../store/api/apiSlice";
import { Container, Stack } from "@mui/material";
import JobCard from "./card/jobCard";
import LoadingCards from "./loadingCards";
import { useAppSelector } from "../hooks/redux";
import NotFound from "./notFound";

function CardGrid() {
  const [offset, setOffset] = useState(0);
  const [getJobs, { isLoading }] = useGetJobsMutation();
  const [jobs, setJobs] = useState<Tjob[]>([]);
  const [remainingJobs, setRemaining] = useState<number | null>(null);
  const filterState = useAppSelector((state) => state.filters);
  console.log(remainingJobs);

  const observerTarget = useRef<HTMLDivElement>(null);

  // fetch jobs from api using offset
  const fetchJobs = async () => {
    if (!isLoading && (!remainingJobs || remainingJobs > 0)) {
      try {
        const res = await getJobs({ offset }).unwrap();
        setJobs((prevJobs) => [...prevJobs, ...res.jobs]);
        setRemaining(res.totalCount - (jobs.length + 10));
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

  const filterJobs = () => {
    let filteredJobsNew = jobs ?? [];
    const {
      minExperience,
      companyName,
      location,
      remote,
      // techStack,
      role,
      minBasePay,
    } = filterState;
    if (minExperience > 0) {
      filteredJobsNew = filteredJobsNew.filter((job) => {
        if (job.minExp) return job.minExp > minExperience;
      });
    }
    if (companyName.length > 0) {
      filteredJobsNew = filteredJobsNew.filter((job) => {
        if (job.companyName)
          return job.companyName
            .toLowerCase()
            .includes(companyName.toLowerCase());
      });
    }
    if (location.length > 0) {
      filteredJobsNew = filteredJobsNew.filter((job) => {
        if (job.location)
          return job.location.toLowerCase().includes(location.toLowerCase());
      });
    }
    if (remote !== "any") {
      if (remote === "remote") {
        filteredJobsNew = filteredJobsNew.filter((job) =>
          job.location.toLowerCase().includes("remote"),
        );
      } else {
        // on-site
        filteredJobsNew = filteredJobsNew.filter(
          (job) => !job.location.toLowerCase().includes("remote"),
        );
      }
    }
    // TODO: update after api call updated
    //
    // if (techStack.length > 0) { // no tech stack in api call
    //   filteredJobsNew.filter((job) => {
    //     if (job.minExp) return job.minExp > minExperience;
    //   });
    // }
    if (role.length > 0) {
      filteredJobsNew = filteredJobsNew.filter((job) =>
        job.jobRole.toLowerCase().includes(role),
      );
    }
    if (minBasePay > 0) {
      filteredJobsNew = filteredJobsNew.filter((job) => {
        if (job.minJdSalary) return job.minJdSalary > minBasePay;
      });
    }
    return filteredJobsNew;
  };
  const filteredJobs = filterJobs();

  // fetchJobs on offset change
  useEffect(() => {
    fetchJobs();
  }, [offset]);

  return (
    <Container maxWidth="xl">
      {filteredJobs.length ? (
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={4}
          justifyContent="center"
        >
          {filteredJobs.map((job) => (
            <JobCard
              key={job.jdUid}
              jobInfo={job}
            />
          ))}
          {/* show loading skeleton if first call or loading */}
          {(remainingJobs == null || remainingJobs > 0) && isLoading && (
            <LoadingCards />
          )}
          <div
            style={{ width: "100%" }}
            ref={observerTarget}
          ></div>
        </Stack>
      ) : (
        <NotFound />
      )}
    </Container>
  );
}

export default CardGrid;
