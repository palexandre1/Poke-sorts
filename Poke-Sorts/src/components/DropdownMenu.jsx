import { useState } from 'react';

function DropdownMenu({ sort }) {
  const handleBubble = () => {
    sort('bubble');
  };

  const handleSelect = () => {
    sort('selection');
  };

  const handleInsertion = () => {
    sort('insertion');
  };

  // const handleMerge = () => {
  // };

  return (
    <div className="absolute flex left-32">
      <ul className="list-none">
        <li className="px-2 py-1.5 font-bold text-white bg-ball-500 rounded hover:bg-rose-800 cursor-pointer border border-black" onClick={handleBubble}>Bubble</li>
        <li className="px-2 py-1.5 font-bold text-white bg-ball-500 rounded hover:bg-rose-800 cursor-pointer border border-black" onClick={handleSelect}>Selection</li>
        <li className="px-2 py-1.5 font-bold text-white bg-ball-500 rounded hover:bg-rose-800 cursor-pointer border border-black" onClick={handleInsertion}>Insertion</li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
