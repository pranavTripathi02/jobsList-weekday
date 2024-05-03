import { Box, Button, Stack, Typography } from "@mui/material";
import { Tjob } from "../../store/api/apiSlice";

function JobCard({ jobInfo }: { jobInfo: Tjob }) {
  const {
    jdLink,
    minExp,
    jobRole,
    location,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    jobDetailsFromCompany,
  } = jobInfo;

  return (
    <Box
      maxHeight={500}
      maxWidth={300}
      borderRadius={5}
      boxShadow={2}
      px="2rem"
      py="2rem"
    >
      {/* posted when */}
      <Stack direction="row">
        <img
          src=""
          alt=""
        />
        <Stack direction="column">
          <Typography>{jobRole}</Typography>
          <Typography>{location}</Typography>
        </Stack>
      </Stack>
      <Typography>
        Estimated Salary: {salaryCurrencyCode}
        {minJdSalary} - {salaryCurrencyCode}
        {maxJdSalary} LPA
      </Typography>
      <Box
        maxHeight={250}
        overflow="hidden"
      >
        <Typography>About Company:</Typography>
        <Typography>About us</Typography>
        <Typography>{jobDetailsFromCompany}</Typography>
      </Box>
      <Box>
        <Typography>Minimum Experience</Typography>
        <Typography>{minExp} years</Typography>
      </Box>
      <Button
        color="secondary"
        href={jdLink}
      >
        Easy Apply
      </Button>
      <Button>Unlock referral asks</Button>
    </Box>
  );
}

export default JobCard;
