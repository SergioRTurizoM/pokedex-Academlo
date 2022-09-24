import { configureStore } from "@reduxjs/toolkit";
import  pokeNameSlice  from "./slices/pokeName";

export default configureStore({
  reducer: {
    pokeNameSlice: pokeNameSlice,
  },
});
