import axios from 'axios';

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

export { getPokemon, getAllPokemon, containsPokemon };
