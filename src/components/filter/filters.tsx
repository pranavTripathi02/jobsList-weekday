import { Box, Button, Container } from "@mui/material";
import { Stack } from "@mui/material";
import ExpFilter from "./expFilter";
import RemoteFilter from "./remoteFilter";
import CompanyNameFilter from "./companyNameFilter";
import LocationFilter from "./locationFilter";
import MinBasePayFilter from "./minBasePayFilter";
import RolesFilter from "./rolesFilter";
import TechStackFilter from "./techStackFilter";
import { useAppDispatch } from "../../hooks/redux";
import { resetAllFilters } from "../../store/reducers/filtersSlice";
import { useEffect, useState } from "react";

function Filters() {
  const dispatch = useAppDispatch();
  const [isReset, setIsReset] = useState(0);
  const handleReset = () => {
    dispatch(resetAllFilters());
    setIsReset((prev) => prev + 1);
  };
  useEffect(() => {
    setIsReset(0);
  }, [isReset]);
  return (
    <>
      {/* ISSUE:  */}
      {/* crude reset method */}
      {isReset === 0 && (
        <Stack
          direction="row"
          gap={4}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {/* min experience filter */}
          <ExpFilter />

          {/* company name filter */}
          <CompanyNameFilter />

          {/* roles filter */}
          <RolesFilter />

          {/* location filter */}
          <LocationFilter />

          {/* remote filter */}
          <RemoteFilter />

          {/* tech stack filter */}
          <TechStackFilter />

          {/* min base pay filter */}
          <MinBasePayFilter />
        </Stack>
      )}
      <Container>
        <Box
          textAlign="right"
          pt={4}
          pb={8}
        >
          <Button
            variant="contained"
            onClick={handleReset}
            fullWidth={false}
          >
            Clear all filters
          </Button>
        </Box>
      </Container>
    </>
  );
}
export default Filters;
