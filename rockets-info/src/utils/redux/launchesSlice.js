import { createSlice } from "@reduxjs/toolkit";
const launchesSlice = createSlice({
  name: "launchesSlice",
  initialState: {
    data: [],
  },
  reducers: {
    startLaunches: (state) => {
      state.loading = true;
    },
    successLaunches: (state, action) => {
      state.launchesData = action.payload;
      state.loading = null;
    },
    errorLaunches: (state) => {
      state.loading = null;
      state.error = true;
    },
  },
});

export const { startLaunches, successLaunches, errorLaunches } =
  launchesSlice.actions;
export default launchesSlice.reducer;
