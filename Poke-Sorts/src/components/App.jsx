import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';

function App() {
  const [team, setTeam] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    if (state !== null) {
      console.log(state);
      const { roster } = state;
      setTeam(roster);
      localStorage.setItem('team', JSON.stringify(roster));
    } else {
      const result = JSON.parse(localStorage.getItem('team'));
      if (result) {
        setTeam(result);
      }
    }
  }, [state]);

  return (
    <>
      <h1>Poke Sorts</h1>
      <div className="flex items-center">
        <Link to="/select">
          <button type="button" className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2">Select Team</button>
        </Link>
        <Link to="/edit">
          <button type="button" className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2">Edit Team</button>
        </Link>
        <button type="button" className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2">Sort Team</button>
      </div>
      <div className="flex flex-row">
        {team.length > 0 && team.map((pokemon) => (
          <img
            className=""
            key={pokemon.id}
            src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
            alt="/"
          />
        ))}
      </div>
    </>
  );
}

export default App;
