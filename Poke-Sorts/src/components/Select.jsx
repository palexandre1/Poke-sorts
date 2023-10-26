import { useState, useEffect } from 'react';
import {
  useQuery,
} from '@tanstack/react-query'
import { useLoaderData } from 'react-router-dom'
import { getPokemon, getAllPokemon } from '../lib/data';

const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=386';

const loadPokemon = async (data) => {
  const monData = await Promise.all(data.map(async pokemon => {
    const pokemonGet = await getPokemon(pokemon);
    return pokemonGet;
  }));
  return monData;
};

const pokemonQuery = () => ({
  queryKey: ['pokemon'],
  queryFn: async () => {
    const response = await getAllPokemon(apiURL);
    return loadPokemon(response.results);
  },
  refetchOnWindowFocus: false,
});

export const loader = (queryClient) => async () => {
  const query = pokemonQuery();
  return (
    queryClient.getQueryData(query.queryKey)
    ?? (queryClient.fetchQuery(query))
  );
};

function Select() {
  const [pokemonData, setPokemonData] = useState([]);
  const { isPending, error, data } = useQuery(pokemonQuery());

  if (isPending) return 'Loading...';

  if (error) return `An error has occured: ${error.message}`;
  console.log(data);

  return (
    <span>
      {data.length !== undefined && data.length > 0 ? 'Data was successfully fetched' : 'Data not retrieved'}
    </span>
  );
}

export default Select;
