import { TextField } from "@mui/material";
import FilterElement from "./filterEl";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { changeFilter } from "../../store/reducers/filtersSlice";

function RolesFilter() {
  const [rolesText, setRolesText] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRolesText(e.target.value);
    dispatch(changeFilter({ filter: { role: e.target.value } }));
  };

  return (
    <FilterElement>
      <TextField
        id="roles-filter"
        label="Role"
        variant="outlined"
        value={rolesText}
        onChange={handleChange}
      />
    </FilterElement>
  );
}

export default RolesFilter;
