import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pokemonCardStyle from "../styles/pokemonCardStyle.css";
import "bootswatch/dist/quartz/bootstrap.min.css";

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
        <img src={pokemon.sprites?.other["official-artwork"].front_default}   alt=""  className="animate__animated  animate__pulse animate__infinite	infinite imageCard"     />
      </div>

      <div>
        <p>HP: {pokemon.stats?.[0].base_stat}</p>
        <p>ATAQUE: {pokemon.stats?.[1].base_stat}</p>
        <p>DEFENSA: {pokemon.stats?.[2].base_stat}</p>
        <p>VELOCIDAD: {pokemon.stats?.[5].base_stat}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
