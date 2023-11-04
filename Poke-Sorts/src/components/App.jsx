import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

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
          <button type="button" className="px-4 py-2 font-bold text-white bg-rose-600 rounded hover:bg-rose-800">Select Team</button>
        </Link>
        <Link to="/edit">
          <button type="button" className="px-4 py-2 font-bold text-white bg-rose-600 rounded hover:bg-rose-800">Edit Team</button>
        </Link>
        <button type="button" className="px-4 py-2 font-bold text-white bg-rose-600 rounded hover:bg-rose-800">Sort Team</button>
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
