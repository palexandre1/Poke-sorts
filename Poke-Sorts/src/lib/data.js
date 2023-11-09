import axios from 'axios';

const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=386';

const getPokemon = async ({ url }) => {
  const results = await axios.get(url)
    .then((response) => response.data);
  return results;
};

const getAllPokemon = async (url) => {
  const results = await axios.get(url)
    .then((response) => response.data);
  return results;
};

const containsPokemon = (obj, list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }
  return false;
};

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
    console.log('A fetch was ran');
    const response = await getAllPokemon(apiURL);
    return loadPokemon(response.results);
  },
  refetchOnWindowFocus: false,
  refetchOnMount: false,
});

const loader = (queryClient) => async () => {
  const query = pokemonQuery();
  return (
    queryClient.getQueryData(query.queryKey)
    ?? (queryClient.fetchQuery(query))
  );
};

export {
  getPokemon, getAllPokemon, containsPokemon, loadPokemon, pokemonQuery, loader,
};
