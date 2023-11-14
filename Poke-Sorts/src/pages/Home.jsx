import { useState, useEffect, createRef, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import anime from 'animejs/lib/anime.es';
import Pokemon from '../components/Pokemon';
import DropdownMenu from '../components/DropdownMenu';
import algoSort from '../helpers/algoSort';
import getSwapAnimation from '../helpers/swapAnimation';
import makeHashMap from '../helpers/makeHashMap';

function Home() {
  const [team, setTeam] = useState([]);
  const [sort, setSort] = useState(false);
  const [positions, setPositions] = useState([]);
  const [isDropdownVisible, setDropdownVisbile] = useState(false);
  const { state } = useLocation();
  const elementRef = useRef(null);

  const handleClick = () => {
    setDropdownVisbile(!isDropdownVisible);
  };

  const bubbleSort = () => {
    const idNumbers = team.map((pokemon) => pokemon.id);
    const swapsArray = algoSort(idNumbers, 'bubble');
    console.log(swapsArray);

    getSwapAnimation(swapsArray, idNumbers);

    setDropdownVisbile(!isDropdownVisible);
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
      <div className="flex items-center pb-5 space-x-0.5">
        <Link to="/select">
          <button type="button" className="px-4 py-2 font-bold text-white bg-rose-600 rounded-md hover:bg-rose-800">Select Team</button>
        </Link>
        <Link to="/edit">
          <button type="button" className="px-4 py-2 font-bold text-white bg-rose-600 rounded-md hover:bg-rose-800">Edit Team</button>
        </Link>
        <button type="button" className="px-4 py-2 font-bold text-white bg-rose-600 rounded-md hover:bg-rose-800" onClick={handleClick}>Sort Team</button>
        {isDropdownVisible && <DropdownMenu bubble={bubbleSort} />}
      </div>
      <div className={`flex flex-row mt-20 m-auto`}>
        {team.length > 0 && team.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            mon={pokemon}
            ref={createRef()}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
