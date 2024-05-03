import { TextField } from "@mui/material";
import FilterElement from "./filterEl";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { changeFilter } from "../../store/reducers/filtersSlice";

function TechStackFilter() {
  const [techStackText, setTechStackText] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTechStackText(e.target.value);
    dispatch(changeFilter({ filter: { role: e.target.value } }));
  };

  return (
    <FilterElement>
      <TextField
        id="techStack-filter"
        label="Role"
        variant="outlined"
        value={techStackText}
        onChange={handleChange}
      />
    </FilterElement>
  );
}

export default TechStackFilter;
