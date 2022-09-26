import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeNamePoke } from "../store/slices/pokeName";
import "animate.css";
import { Animated } from "react-animated-css";
import App from "../styles/App.css";
import heyentrenador from "../assets/images/heyentrenador.png";
import imagenPokedex from "../assets/images/imagenPokedex.png";
import PokeBall from "../assets/images/PokeBall.png";
import botonentrar from '../assets/images/botonentrar.png'

const PokeInput = () => {
  const dispatch = useDispatch();
  const [pokeName, setPokeName] = useState("");

  const navigate = useNavigate();

  const dispatchPokeName = () => {
    dispatch(changeNamePoke(pokeName));
    navigate("/pokedex");
  };
  return (
    <>
      <div className="container">
        <div className="subcontainer">
          <div>
            <img
              src={imagenPokedex}
              className="imgPokedex animate__animated animate__jackInTheBox "
            />
          </div>

          <div>
            <h1>¡Hey entrenador!</h1>
          </div>
          <div className="formStart">
            <label>Ingresa tu nombre para continuar:</label>
            <br />
            <input
              value={pokeName}
              onChange={(e) => setPokeName(e.target.value)}
            ></input>
            <img
              src={botonentrar}
              onClick={dispatchPokeName}
              className="buttonStart animate__animated animate__pulse animate__infinite	infinite"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeInput;
