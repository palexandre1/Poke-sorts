import { useState, useEffect } from 'react';
import axios from 'axios';
import { getPokemon, getAllPokemon } from '../lib/data';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [team, setTeam] = useState([]);
  const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=386';

  const loadPokemon = async (data) => {
    let monData = await Promise.all(data.map(async pokemon => {
      let pokemonGet = await getPokemon(pokemon);
      return pokemonGet;
    }));
    setPokemonData(monData);
  };

  useEffect(() => {
    async function fetchPokemon() {
      let response = await getAllPokemon(apiURL);
      await loadPokemon(response.results);
    }
    fetchPokemon();
  }, []);

  console.log(pokemonData);

  return (
    <>
      <h1>Poke Sorts</h1>
      <div className="flex items-center">

      </div>
      <div className="flex items-center">
        <button type="button" className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2">Select Team</button>
        <button type="button" className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2">Edit Team</button>
        <button type="button" className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2">Sort Team</button>
      </div>
    </>
  );
}

export default App;
