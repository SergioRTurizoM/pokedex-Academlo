import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import pokeDex from "../styles/pokeDex.css";
import "bootswatch/dist/quartz/bootstrap.min.css";

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/stat/${id}/`)
      .then((res) => setStats(res.data));
  }, []);

  console.log(stats);

  console.log(pokemon);

  return (
    <div className="containerDetails">
      <h1>POKEMON DETAILS</h1>
      <h3>
        Estás viendo el Pokemon con id:
        <small className="text-muted"> {id}</small>
      </h3>

      <div className="card mb-3 cardDetail">
        <h2 className="card-header">{pokemon.name}</h2>
        <img
          className="imagePokemon animate__animated  animate__pulse animate__infinite	infinite" 
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt={pokemon.name}
        />

        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Peso</th>
              <th scope="col">Altura</th>
              <th scope="col">Tipo:</th>
              <th scope="col">Habilidades</th>
              <th scope="col">Hp</th>
              <th scope="col">Ataque</th>
              <th scope="col">Defensa</th>
              <th scope="col">Velocidad</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-active">
              <td>{pokemon.weight}</td>
              <td>{pokemon.height}</td>
              <td>{pokemon.types?.[0].type.name} </td>
              <td>{stats.name} </td>
              <td>{pokemon.stats?.[0].base_stat} </td>
              <td>{pokemon.stats?.[1].base_stat}</td>
              <td>{pokemon.stats?.[2].base_stat} </td>
              <td>{pokemon.stats?.[5].base_stat} </td>
            </tr>
          </tbody>
        </table>

        <div className="card-body">
          <a href="#" className="card-link">
            Ir al Home
          </a>
          <a onClick={() => navigate("/pokedex/")} className="card-link">
            Regresar a Pokedex
          </a>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
<h1>Pokemon Details</h1>;
