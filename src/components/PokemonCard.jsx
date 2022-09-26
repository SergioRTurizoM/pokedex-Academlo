import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pokemonCardStyle from "../styles/pokemonCardStyle.css";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  console.log(pokemon);

  return (
    <div onClick={() => navigate(`/pokedex/${pokemon.id}`)} className="card">
      <div>
        <h2>{pokemon.name}</h2>
        <img
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt=""
        />
      </div>

      <div>
        <p>Tipo: </p>
        <p>HP</p>
        <p>ATAQUE</p>
        <p>DEFENSA</p>
        <p>VELOCIDAD</p>
      </div>
    </div>
  );
};

export default PokemonCard;
