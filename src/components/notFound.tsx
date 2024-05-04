import { Box, Typography } from "@mui/material";

function NotFound() {
  return (
    <Box textAlign={"center"}>
      <Typography
        component="h1"
        fontSize={40}
      >
        Could not find any jobs.
      </Typography>
      <Typography
        component="h2"
        fontSize={32}
      >
        Please change the filters or refresh the page.
      </Typography>
    </Box>
  );
}

export default NotFound;
