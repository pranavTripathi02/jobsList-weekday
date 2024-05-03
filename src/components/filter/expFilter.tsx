import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import FilterElement from "./filterEl";
import { useState } from "react";

function ExpFilter() {
  const [minExp, setMinExp] = useState("");
  const handleChange = (e: SelectChangeEvent) => {
    setMinExp(e.target.value);
  };
  return (
    <FilterElement>
      <FormControl sx={{ minWidth: "180px" }}>
        <InputLabel id="min-exp-filter">Min Experience</InputLabel>
        <Select
          labelId="min-exp-filter"
          id="min-exp-filter"
          value={minExp}
          onChange={handleChange}
          label="Min Experience"
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>{">"}1</MenuItem>
          <MenuItem value={2}>{">"}2</MenuItem>
          <MenuItem value={3}>{">"}3</MenuItem>
          <MenuItem value={4}>{">"}4</MenuItem>
          <MenuItem value={5}>{">"}5</MenuItem>
        </Select>
      </FormControl>
    </FilterElement>
  );
}

export default ExpFilter;
