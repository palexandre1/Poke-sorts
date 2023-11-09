import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Pokemon from '../components/Pokemon';

function Home() {
  const [team, setTeam] = useState([]);
  const [sort, setSort] = useState(false);
  const { state } = useLocation();

  const sortTeam = () => {
    const idNumbers = team.map((pokemon) => pokemon.id);

    console.log(idNumbers);
    setSort(true);
  };

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
        <button type="button" className="px-4 py-2 font-bold text-white bg-rose-600 rounded hover:bg-rose-800" onClick={sortTeam}>Sort Team</button>
      </div>
      <div className={`flex flex-row ${sort && 'animate-swap'}`}>
        {team.length > 0 && team.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            mon={pokemon}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
