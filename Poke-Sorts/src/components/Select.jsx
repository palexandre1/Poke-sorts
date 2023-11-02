import { useState, useEffect } from 'react';
import {
  useQuery,
} from '@tanstack/react-query'
import { useLoaderData, Link } from 'react-router-dom'
import { getPokemon, getAllPokemon, containsPokemon } from '../lib/data';

const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=386';

const loadPokemon = async (data) => {
  const monData = await Promise.all(data.map(async (pokemon) => {
    const pokemonGet = await getPokemon(pokemon);
    return pokemonGet;
  }));
  return monData;
};

const pokemonQuery = () => ({
  queryKey: ['pokemon'],
  queryFn: async () => {
    console.log("A fetch was ran")
    const response = await getAllPokemon(apiURL);
    return loadPokemon(response.results);
  },
  refetchOnWindowFocus: false,
  refetchOnMount: false,
});

export const loader = (queryClient) => async () => {
  const query = pokemonQuery();
  return (
    queryClient.getQueryData(query.queryKey)
    ?? (queryClient.fetchQuery(query))
  );
};

function Select() {
  const [selected, setSelected] = useState([]);
  const { isPending, error, data } = useQuery(pokemonQuery());

  if (isPending) return 'Loading...';

  if (error) return `An error has occured: ${error.message}`;

  const handleClick = (pokemon) => {
    if (containsPokemon(pokemon, selected)) {
      setSelected(selected.filter((i) => i.id !== pokemon.id));
    } else if (selected.length < 6) {
      setSelected([...selected, pokemon]);
    } else if (selected.length === 6) {
      window.alert('You already have 6 Pokemon! You need to unselect one first.');
    }
  };

  const handleSubmit = () => {
    //Prompt the user to confirm selections
    //Send selected array state up to parent
  };

  console.log(selected);
  return (
    <>
      <div className="flex items-center">
        <Link to="/">
          <button type="button" className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2">Home</button>
        </Link>
        <Link to="/" state={{ roster: selected }}>
          <button type="submit" className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2">Submit</button>
        </Link>
      </div>
      <div className="w-full relative group">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-6 gap-8">
          {data.map((pokemon) => (
            <div
              key={pokemon.id}
              className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ${containsPokemon(pokemon, selected) && 'border-4 border-cyan-500'}`}
              onClick={() => handleClick(pokemon)}
            >
              <img
                className="w-20 mx-auto mt-[-3rem] bg-white"
                src={pokemon.sprites.front_default}
                alt="/"
              />
              <h2 className="capitalize text-2xl font-bold text-center py-8">
                {pokemon.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Select;
