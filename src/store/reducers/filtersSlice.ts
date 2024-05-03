import { createSlice } from "@reduxjs/toolkit";

type isJobRemote = "remote" | "on-site" | "any";

type TinitialState = {
  minExperience: number;
  companyName: string;
  location: string;
  remote: isJobRemote;
  techStack: string;
  role: string;
  minBasePay: number;
};

const initialState: TinitialState = {
  minExperience: 0,
  companyName: "",
  location: "",
  remote: "any",
  techStack: "",
  role: "",
  minBasePay: 0,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (
      state,
      action: { payload: { filter: Partial<TinitialState> } },
    ) => {
      const { filter } = action.payload;
      console.log("hi", filter);
      return { ...state, filter };
    },
    removeFilter: (
      state,
      action: { payload: { filter: keyof TinitialState } },
    ) => {
      const { filter } = action.payload;
      console.log("ho", filter);
      return { ...state, filter: initialState[filter] };
    },
    resetAllFilters: () => {
      return initialState;
    },
  },
});

export const { changeFilter, removeFilter, resetAllFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
