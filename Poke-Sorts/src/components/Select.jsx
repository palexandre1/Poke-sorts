import { useState, useEffect } from 'react';
import {
  useQuery,
} from '@tanstack/react-query'
import { getPokemon, getAllPokemon } from '../lib/data';

function Select() {
  const [pokemonData, setPokemonData] = useState([]);
  const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=386';

  const loadPokemon = async (data) => {
    let monData = await Promise.all(data.map(async pokemon => {
      let pokemonGet = await getPokemon(pokemon);
      return pokemonGet;
    }));
    return monData;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      const response = await getAllPokemon(apiURL);
      return loadPokemon(response.results);
    },
    refetchOnWindowFocus: false,
  });

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
