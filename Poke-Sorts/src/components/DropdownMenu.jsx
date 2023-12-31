import { useState } from 'react';

function DropdownMenu({ bubble, selection }) {
  const handleBubble = () => {
    bubble();
  };

  const handleSelect = () => {
    selection();
  };

  const handleMerge = () => {
  };

  return (
    <div>
      <ul className="absolute top-0 list-none">
        <li className="px-2 py-1.5 font-bold text-white bg-rose-600 rounded-lg hover:bg-rose-800 cursor-pointer" onClick={handleBubble}>Bubble</li>
        <li className="px-2 py-1.5 font-bold text-white bg-rose-600 rounded-lg hover:bg-rose-800 cursor-pointer" onClick={handleSelect}>Selection</li>
        <li className="px-2 py-1.5 font-bold text-white bg-rose-600 rounded-lg hover:bg-rose-800 cursor-not-allowed" onClick={handleMerge}>Merge</li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
