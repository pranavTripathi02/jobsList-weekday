import { TextField } from "@mui/material";
import { useState } from "react";
import { changeFilter } from "../../store/reducers/filtersSlice";
import { useAppDispatch } from "../../hooks/redux";
import FilterElement from "./filterEl";

function LocationFilter() {
  const [locationText, setLocationText] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setLocationText(e.target.value);
    dispatch(changeFilter({ filter: { location: e.target.value } }));
  };

  return (
    <FilterElement>
      <TextField
        id="location-filter"
        label="Location"
        variant="outlined"
        value={locationText}
        onChange={handleChange}
      />
    </FilterElement>
  );
}

export default LocationFilter;
