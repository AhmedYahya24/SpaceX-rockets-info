import { configureStore } from "@reduxjs/toolkit";
import launchesSlice from "./launchesSlice";
import missionsSlice from "./missionsSlice";

export const store = configureStore({
  reducer: {
    launches: launchesSlice,
    missions: missionsSlice,
  },
});
