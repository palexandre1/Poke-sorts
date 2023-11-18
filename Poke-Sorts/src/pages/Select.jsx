import { useState, useEffect } from 'react';
import {
  useQuery,
} from '@tanstack/react-query';
import { useLoaderData, Link } from 'react-router-dom';
import { containsPokemon, pokemonQuery } from '../lib/data';
import shuffle from '../helpers/shuffle';

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

  const handleRandom = () => {
    const shuffledData = shuffle(data);
    setSelected(shuffledData.slice(0, 6));
  };

  const handleSubmit = () => {
    //Pause code
    //Prompt the user to confirm selections
    //Continue route & data send to Home Page
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="sticky top-0">
        <Link to="/">
          <button type="button" className="px-4 py-2 font-bold text-white bg-rose-600 rounded hover:bg-rose-800">Home</button>
        </Link>
        <Link to="/" state={{ roster: selected }}>
          <button type="submit" className="px-4 py-2 font-bold text-white bg-rose-600 rounded hover:bg-rose-800">Submit</button>
        </Link>
        <button type="button" className="px-4 py-2 font-bold text-white bg-rose-600 rounded hover:bg-rose-800" onClick={handleRandom}>Random</button>
      </div>
      <p className="text-lg font-roboto font-bold text-center">
        Hello! On this page you may select no more than 6 Pokemon to be on your team.
        Click on a Pokemon to select or deselect it. Click submit to finalize your team.
      </p>
      <div className="flex flex-wrap pl-20">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-6 gap-8">
          {data.map((pokemon) => (
            <div
              key={pokemon.id}
              className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer hover:underline ${containsPokemon(pokemon, selected) && 'border-4 border-cyan-500'}`}
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
              <span className="capitalize text-2xl font-bold text-center py-8 font-roboto">
                {pokemon.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
