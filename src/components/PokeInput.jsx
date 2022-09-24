import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeNamePoke } from "../store/slices/pokeName";

const PokeInput = () => {
  const dispatch = useDispatch();
  const [pokeName, setPokeName] = useState("");

  const navigate = useNavigate()

  const dispatchPokeName = () => {
    dispatch(changeNamePoke(pokeName));
    navigate('/pokedex')
  };
  return (
    <>
      <div>
        <h1>Pokemon</h1>
      </div>
      <div>
        <label>Catch a Pokemon!</label>
        <br />
        <input
          value={pokeName}
          onChange={(e) => setPokeName(e.target.value)}
        ></input>
        <button onClick={dispatchPokeName}>Search</button>
      </div>
    </>
  );
};

export default PokeInput;
