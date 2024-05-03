// import { Box, Button, Container, Stack } from "@mui/material";
import { Stack } from "@mui/material";
import ExpFilter from "./expFilter";
import RemoteFilter from "./remoteFilter";
import CompanyNameFilter from "./companyNameFilter";
import LocationFilter from "./locationFilter";
import MinBasePayFilter from "./minBasePayFilter";
import RolesFilter from "./rolesFilter";
import TechStackFilter from "./techStackFilter";
// import { useAppDispatch } from "../../hooks/redux";
// import { resetAllFilters } from "../../store/reducers/filtersSlice";

function Filters() {
  // const dispatch = useAppDispatch();
  // const handleReset = () => {
  //   dispatch(resetAllFilters());
  // };
  return (
    <>
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
      {/* <Container> */}
      {/*   <Box */}
      {/*     textAlign="right" */}
      {/*     pt={4} */}
      {/*     pb={8} */}
      {/*   > */}
      {/*     <Button */}
      {/*       variant="contained" */}
      {/*       onChange={handleReset} */}
      {/*       fullWidth={false} */}
      {/*     > */}
      {/*       Clear all filters */}
      {/*     </Button> */}
      {/*   </Box> */}
      {/* </Container> */}
    </>
  );
}
export default Filters;
