import { useState, useEffect, createRef, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import anime from 'animejs/lib/anime.es';
import { Toast } from 'flowbite-react'
import { HiCheck } from 'react-icons/hi';
import Pokemon from '../components/Pokemon';
import DropdownMenu from '../components/DropdownMenu';
import algoSort from '../helpers/algoSort';
import getSwapAnimation from '../helpers/swapAnimation';

function Home() {
  const [team, setTeam] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [positions, setPositions] = useState([]);
  const [isDropdownVisible, setDropdownVisbile] = useState(false);
  const { state } = useLocation();

  const handleClick = () => {
    setDropdownVisbile(!isDropdownVisible);
  };

  const bubbleSort = () => {
    const idNumbers = team.map((pokemon) => pokemon.id);
    const swapsArray = algoSort(idNumbers, 'bubble');

    const animation = anime.timeline({
      duration: 1000,
      easing: 'linear',
    });

    getSwapAnimation(swapsArray, idNumbers, animation);
    animation.finished.then(() => {
      setSorted(true);
    });

    setDropdownVisbile(!isDropdownVisible);
  };

  const selectionSort = () => {
    const idNumbers = team.map((pokemon) => pokemon.id);
    const swapsArray = algoSort(idNumbers, 'selection');

    const animation = anime.timeline({
      duration: 1000,
      easing: 'linear',
    });

    getSwapAnimation(swapsArray, idNumbers, animation);
    animation.finished.then(() => {
      setSorted(true);
    });

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
          <button type="button" className="px-4 py-2 font-bold text-white bg-ball-500 rounded-md hover:bg-rose-800">Select Team</button>
        </Link>
        <Link to="/edit">
          <button type="button" className="px-4 py-2 font-bold text-white bg-ball-500 rounded-md hover:bg-rose-800">Edit Team</button>
        </Link>
        <button type="button" className="px-4 py-2 font-bold text-white bg-ball-500 rounded-md hover:bg-rose-800" onClick={handleClick}>Sort Team</button>
        {isDropdownVisible && <DropdownMenu bubble={bubbleSort} selection={selectionSort} />}
      </div>
      <div className="flex flex-row mt-20 justify-center">
        {team.length > 0 && team.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            mon={pokemon}
            ref={createRef()}
          />
        ))}
      </div>
      {sorted && (
      <div className="flex justify-center">
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <HiCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Animation Completed.</div>
          <div className="ml-auto flex items-center space-x-2">
            <button
              type="button"
              className="rounded-lg p-1.5 text-sm font-medium text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700"
              onClick={() => (window.location.reload())}
            >
              Reset
            </button>
            <Toast.Toggle />
          </div>
        </Toast>
      </div>
      )}
    </>
  );
}

export default Home;
