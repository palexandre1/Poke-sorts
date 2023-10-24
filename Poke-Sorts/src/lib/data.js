import axios from 'axios';

const getPokemon = async ({ url }) => {
  const results = await axios.get(url)
    .then((response) => response.data);
  return results;
};

const getAllPokemon = async (url) => {
  const results = await axios.get(url)
    .then((response) => response.data);
  console.log("I'm being executed")
  return results;
};

export { getPokemon, getAllPokemon };
