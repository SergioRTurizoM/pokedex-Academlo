import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import PokedexStyle from "../styles/PokedexStyle.css";
import "bootswatch/dist/quartz/bootstrap.min.css";

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

  console.log(pokeList);

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
  const quantityPokePerPage = 6;
  const lastPokeIndex = page * quantityPokePerPage;
  const firstPokeindex = lastPokeIndex - quantityPokePerPage;
  const pokePaginated = pokeList.slice(firstPokeindex, lastPokeIndex);

  const lastPage = Math.ceil(pokeList.length / quantityPokePerPage);
  const pagesNumber = [];

  for (let i = 1; i <= lastPage; i++) {
    pagesNumber.push(i);
  }

  return (
    <div className="pokedexpage">
       <button type="button" class="btn btn-outline-light"   onClick={() => navigate("/")}>Home</button>
      <h1><span className="text-muted">Hola</span> {name} !</h1>
      <h3>Elige tu Pokemon</h3>

      <div className="searchContainer">

    
        <div className="selection">
          <label className="alert">Selecciona un tipo de Pokemon</label>
          <select  name="Select by type"  id="Select by type" onChange={(e) => searchType(e.target.value)}  className="btn btn-info selectList">
            {typeList.map((type) => (
            <option value={type.url} key={type.name} className="dropdown-item">{type.name} </option> ))}
          </select>
        </div>




        <br />
        {/* <div>
          <label>Search by name</label>
          <input
            type="text"
            placeholder="Search by name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          ></input>
          <button onClick={() => searchName()}>Search</button>
        </div> */}



        <div className="form-group">
          {/* <label className="form-label mt-4">Input addons</label> */}
          <div className="form-group">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Buscar por nombre" aria-label="Recipient's username" aria-describedby="button-addon2" value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}/>
              <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => searchName()}>Buscar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="pagination">
        <button
          className="page-item page-link"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          &laquo;
        </button>

        {pagesNumber.map((number) => (
          <button
            className="page-link page-item"
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}

        <button
          className="page-item page-link"
          onClick={() => setPage(page + 1)}
          disabled={page === lastPage}
        >
          &raquo;
        </button>
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
