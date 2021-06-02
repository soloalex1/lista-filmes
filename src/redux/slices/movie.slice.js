import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export default moviesSlice.reducer;
