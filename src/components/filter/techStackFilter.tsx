import { FormControl, InputLabel, Select } from "@mui/material";
import FilterElement from "./filterEl";

function TechStackFilter() {
  // const handleChange = (e: SelectChangeEvent) => {
  //   setTechStack(e.target.value);
  // };

  return (
    <FilterElement>
      <FormControl sx={{ minWidth: "180px" }}>
        <InputLabel id="techStack-filter">Tech Stack</InputLabel>
        <Select
          sx={{ cursor: "not-allowed" }}
          labelId="techStack-filter"
          id="techStack-filter"
          disabled
          value=""
          label="Tech Stack"
        />
      </FormControl>
    </FilterElement>
  );
}

export default TechStackFilter;
