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
    <div className="flex flex-col gap-10">
      <div className="sticky top-0">
        <Link to="/">
          <button type="button" className="px-4 py-2 font-bold text-white bg-rose-600 rounded hover:bg-rose-800">Home</button>
        </Link>
        <Link to="/" state={{ roster: selected }}>
          <button type="submit" className="px-4 py-2 font-bold text-white bg-rose-600 rounded hover:bg-rose-800">Submit</button>
        </Link>
      </div>
      <div className="flex flex-wrap pl-20">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-6 gap-8">
          {data.map((pokemon) => (
            <div
              key={pokemon.id}
              className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer ${containsPokemon(pokemon, selected) && 'border-4 border-cyan-500'}`}
              onClick={() => handleClick(pokemon)}
              onKeyDown={(e) => e.key === 'Enter' && handleClick(pokemon)}
              role="button"
              tabIndex="0"
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
        <span>Hello World</span>
      </div>
    </div>
  );
}

export default Select;
