import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  const handleClick = () => {
    setDropdownVisbile(!isDropdownVisible);
  };

  const bubbleSort = () => {
    const idNumbers = team.map((pokemon) => pokemon.id);
    const halfLength = Math.ceil(positions.length / 2);
    const positionsArray = positions.slice(0, halfLength);
    const coordinates = makeHashMap(positionsArray);
    console.log(coordinates);
    const swapArray = algoSort(idNumbers, 'bubble');
    // console.log(swapArray);

    //For each swap in swapArray,
      //call swapAnimation.
      //Run animation

    // for (let i = 0; i < swapArray.length; i += 1) {
    //   for (let j = 0; j < swapArray[i].length; j += 1) {
    //     swapAnimation()
    //   }
    // }

    //TEST Animation
    for (let i = 0; i < swapArray[0].length; i += 1) {
      const currentElement = swapArray[0][i];
      const gap = coordinates[swapArray[0][1]] - coordinates[swapArray[0][0]];
      getSwapAnimation(gap, i, currentElement);
    }

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
            list={positions}
            add={setPositions}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
