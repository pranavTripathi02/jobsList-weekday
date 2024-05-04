import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { Tjob } from "../../store/api/apiSlice";
import "./jobCard.css";
import { ElectricBolt } from "@mui/icons-material";
import { useState } from "react";

function JobCard({ jobInfo }: { jobInfo: Tjob }) {
  const {
    minExp,
    jobRole,
    location,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    jobDetailsFromCompany,
    companyName,
    logoUrl,
  } = jobInfo;

  const currencyCode = salaryCurrencyCode === "USD" ? "$" : "₹";

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [viewMore, setViewMore] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleViewMore = () => {
    setViewMore((prev) => !prev);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Stack
      width={320}
      height={512}
      borderRadius={5}
      boxShadow={2}
      px="2rem"
      py="2rem"
      gap={1}
    >
      {/* posted when */}
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
      >
        <Avatar
          alt="Company logo"
          src={logoUrl ?? "company logo"}
          variant="square"
          sx={{ height: 50, width: 50 }}
        />
        <Stack direction="column">
          <Typography
            fontSize={14}
            fontWeight={600}
            color="gray"
          >
            {companyName}
          </Typography>
          <Typography textTransform="capitalize">{jobRole}</Typography>
          <Typography
            fontSize={12}
            textTransform="capitalize"
          >
            {location}
          </Typography>
        </Stack>
      </Stack>
      {/* hide min/max salary if not provided */}
      {minJdSalary ? (
        maxJdSalary ? (
          <Typography>
            Estimated Salary: {currencyCode}
            {minJdSalary} - {currencyCode}
            {maxJdSalary} LPA
          </Typography>
        ) : (
          <Typography>
            Estimated Salary: {currencyCode}
            {minJdSalary}
          </Typography>
        )
      ) : (
        <Typography>
          Estimated Salary: {currencyCode}
          {maxJdSalary} LPA
        </Typography>
      )}
      <Box
        maxHeight={250}
        overflow={viewMore ? "scroll" : "clip"}
        position="relative"
        zIndex={1}
      >
        {!viewMore && <span className="opacity-overlay" />}
        <Typography fontWeight={500}>About Company:</Typography>
        <Typography fontWeight={600}>About us</Typography>
        <Typography>{jobDetailsFromCompany}</Typography>
        {!viewMore ? (
          <div className="viewJob-btn">
            <Button onClick={handleViewMore}>View job</Button>
          </div>
        ) : (
          <Box
            textAlign="center"
            py={1}
          >
            <Button onClick={handleViewMore}>View less</Button>
          </Box>
        )}
      </Box>
      <Box>
        <Typography
          fontWeight={500}
          color="gray"
        >
          Minimum Experience
        </Typography>
        <Typography>{minExp ? `${minExp} years` : "None"}</Typography>
      </Box>
      <Box
        bgcolor="aquamarine"
        borderRadius={2}
        textAlign="center"
        color="black"
      >
        <Button
          onClick={handleClick}
          fullWidth
          color={"inherit"}
          size="large"
          sx={{ textTransform: "none", fontSize: 18 }}
          startIcon={<ElectricBolt color="warning" />}
        >
          Easy Apply
        </Button>
      </Box>
      <Box
        bgcolor="#304FFE"
        borderRadius={2}
        textAlign="center"
        color="white"
      >
        <Button
          onClick={handleClick}
          fullWidth
          color={"inherit"}
          sx={{ textTransform: "none", fontSize: 16 }}
          startIcon={
            <AvatarGroup max={3}>
              <Avatar
                alt="Wfriend1"
                src="friend1Img"
                sx={{ width: 24, height: 24 }}
              />
              <Avatar
                alt="Kfriend2"
                src="friend2Img"
                sx={{ width: 24, height: 24 }}
              />
              <Avatar
                alt="Dfriend3"
                src="friend3Img"
                sx={{ width: 24, height: 24 }}
              />
            </AvatarGroup>
          }
        >
          Unlock referral asks
        </Button>
      </Box>

      <Popover
        id={id}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Stack p={2}>
          <Typography>This feature is yet to be implemented.</Typography>
          <Typography>Please check back again soon.</Typography>
        </Stack>
      </Popover>
    </Stack>
  );
}

export default JobCard;
