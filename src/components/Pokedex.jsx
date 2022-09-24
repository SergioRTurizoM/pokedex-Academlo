import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
  const name = useSelector((state) => state.pokeNameSlice);

  const [pokeList, setPokeList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [nameInput, setNameInput] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setPokeList(res.data.results));
  }, []);

  // console.log(pokeList);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypeList(res.data.results));
  }, []);

  console.log(typeList);

  const searchName = () => {
    navigate(`/pokedex/${nameInput}`);
  };

  const searchType = (typeUrl) => {
    axios
      .get(typeUrl)
      .then((res) => setPokeList(res.data.pokemon.map((x) => x.pokemon)));
  };

  const [page, setPage] = useState(1);
  const quantityPokePerPage = 5;
  const lastPokeIndex = page * quantityPokePerPage;
  const firstPokeindex = lastPokeIndex - quantityPokePerPage;
  const pokePaginated = pokeList.slice(firstPokeindex, lastPokeIndex);

  const lastPage = Math.ceil(pokeList.length/quantityPokePerPage)
  const pagesNumber = [];

  for (let i = 1; i <= lastPage; i++){
    pagesNumber.push(i)
  }

  return (
    <div>
      <h1>Pokemons</h1>
      <p>Welcome {name} !</p>
      <button onClick={()=>setPage(page -1)} disabled={page===1}>Previous page</button>
      <button onClick={()=>setPage(page +1)} disabled={page === lastPage}>Next page</button>
      {pagesNumber.map(number => (
        <button onClick={()=>setPage(number)}>{number}</button>
      ))}
      <div className="searchContainer">
        <div>
          <label>Select by type</label>
          <select
            name="Select by type"
            id="Select by type"
            onChange={(e) => searchType(e.target.value)}
          >
            {typeList.map((type) => (
              <option value={type.url} key={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <br />
        <div>
          <label>Search by name</label>
        </div>
        <input
          type="text"
          placeholder="Search by name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        ></input>
        <button onClick={() => searchName()}>Search</button>
      </div>
      <div className="pokedexContainer">
        <ul>
          {pokePaginated.map((pokemon) => (
            <PokemonCard url={pokemon.url} key={pokemon.url} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokedex;
