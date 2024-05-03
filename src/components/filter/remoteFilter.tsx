import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import FilterElement from "./filterEl";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { changeFilter } from "../../store/reducers/filtersSlice";

function RemoteFilter() {
  const [isRemote, setIsRemote] = useState<"remote" | "on-site" | "any">("any");
  const dispatch = useAppDispatch();

  const handleChange = (e: SelectChangeEvent) => {
    const val = e.target.value;
    if (val === "remote" || val === "on-site" || val === "any") {
      setIsRemote(val);
      dispatch(changeFilter({ filter: { remote: val } }));
    }
    return;
  };
  return (
    <FilterElement>
      <FormControl sx={{ minWidth: "180px", maxHeight: "fit-content" }}>
        <InputLabel id="remote-filter">Remote</InputLabel>
        <Select
          labelId="remote-filter"
          id="remote-filter"
          value={isRemote}
          onChange={handleChange}
          label="Remote"
        >
          <MenuItem value="any">Any</MenuItem>
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="on-site">On-Site</MenuItem>
        </Select>
      </FormControl>
    </FilterElement>
  );
}

export default RemoteFilter;
