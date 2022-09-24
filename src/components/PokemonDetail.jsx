import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const {id}= useParams();

    const [pokemon, setPokemon] = useState({})

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=>setPokemon(res.data))


    }, [])

    console.log(pokemon);


    return (
        <div>
            <h1>Pokemon Details</h1>
            <p>mostrando Pokemon con id: {id}</p>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.other["official-artwork"].front_default} alt=""/>
            <p>Peso: {pokemon.weight}</p>
            <p>Altura: {pokemon.height}</p>
            <p>Tipo: </p>
            <p>Habilidades</p>
            <p>Estadisticas</p>
            <p>Hp</p>
            <p>Ataque</p>
            <p>Defensa</p>
            <p>Velocidad</p>
            <p>Lista de movimientos</p>

        </div>
    );
};

export default PokemonDetail;<h1>Pokemon Details</h1>