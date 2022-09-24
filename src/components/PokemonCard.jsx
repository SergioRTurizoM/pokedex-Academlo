import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(url)
        .then(res=>setPokemon(res.data))
    }, [])

// console.log(pokemon);

    return (
        <div onClick={()=>navigate(`/pokedex/${pokemon.id}`)}>
           <h2>{pokemon.name}</h2>
           <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
           <p>Tipo</p>
           <p>HP</p>
           <p>ATAQUE</p>
           <p>DEFENSA</p>
           <p>VELOCIDAD</p>
           
        </div>
    );
};

export default PokemonCard;