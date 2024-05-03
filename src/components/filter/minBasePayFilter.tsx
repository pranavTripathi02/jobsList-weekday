import { TextField } from "@mui/material";
import { useState } from "react";
import { changeFilter } from "../../store/reducers/filtersSlice";
import { useAppDispatch } from "../../hooks/redux";
import FilterElement from "./filterEl";

function MinBasePayFilter() {
  const [minBasePay, setMinBasePay] = useState("");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    setMinBasePay(value);
    if (isNaN(+value)) {
      setIsError(true);
      setError("Please enter a number");
      return;
    }
    setIsError(false);
    setError("");
    dispatch(changeFilter({ filter: { minBasePay: +value } }));
  };

  return (
    <FilterElement>
      <TextField
        error={isError}
        helperText={error}
        id="minBasePay-filter"
        label="Min Base Pay"
        variant="outlined"
        value={minBasePay}
        onChange={handleChange}
      />
    </FilterElement>
  );
}

export default MinBasePayFilter;
