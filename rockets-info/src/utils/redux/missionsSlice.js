import { createSlice } from "@reduxjs/toolkit";
const missionsSlice = createSlice({
  name: "missionsSlice",
  initialState: {
    data: [],
  },
  reducers: {
    startMissions: (state) => {
      state.loading = true;
    },
    successMissions: (state, action) => {
      state.missionsData = action.payload;
      state.loading = null;
    },
    errorMissions: (state) => {
      state.loading = null;
      state.error = true;
    },
  },
});

export const { startMissions, successMissions, errorMissions } =
  missionsSlice.actions;
export default missionsSlice.reducer;
