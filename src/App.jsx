import { useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./App.css";
import PokeInput from "./components/PokeInput";
import Pokedex from "./components/Pokedex";
import PokemonDetail from "./components/PokemonDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PokeInput />}></Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />}></Route>
          <Route path="/pokedex/:id" element={<PokemonDetail />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
