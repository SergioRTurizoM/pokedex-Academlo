import { createSlice } from "@reduxjs/toolkit";

export const pokeNameSlice = createSlice({
  name: "pokeNameSlice",
  initialState: "",
  reducers: {
    changeNamePoke: (state, action) =>{
        const pokeName = action.payload;
        return pokeName
    }
  },
});

export const { changeNamePoke } = pokeNameSlice.actions;

export default pokeNameSlice.reducer;
