import { TextField } from "@mui/material";
import { useState } from "react";
import { changeFilter } from "../../store/reducers/filtersSlice";
import { useAppDispatch } from "../../hooks/redux";
import FilterElement from "./filterEl";

function CompanyNameFilter() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchText(e.target.value);
    dispatch(changeFilter({ filter: { companyName: e.target.value } }));
  };

  return (
    <FilterElement>
      <TextField
        id="company-name-filter"
        label="Company Name"
        variant="outlined"
        value={searchText}
        onChange={handleChange}
      />
    </FilterElement>
  );
}

export default CompanyNameFilter;
