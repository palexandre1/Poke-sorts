import { useState } from 'react';

function DropdownMenu({ bubble }) {
  const handleBubble = () => {
    bubble();
    //invoke BubbleSort in parent component
  };

  const handleSelect = () => {
    //invoke SelectionSort in parent component
  };

  const handleMerge = () => {
    //invoke MergeSort in parent component
  };

  return (
    <div>
      <ul className="absolute top-0 list-none">
        <li className="px-2 py-1.5 font-bold text-white bg-rose-600 rounded-lg hover:bg-rose-800 cursor-pointer" onClick={handleBubble}>Bubble</li>
        <li className="px-2 py-1.5 font-bold text-white bg-rose-600 rounded-lg hover:bg-rose-800 cursor-pointer" onClick={handleSelect}>Selection</li>
        <li className="px-2 py-1.5 font-bold text-white bg-rose-600 rounded-lg hover:bg-rose-800 cursor-pointer" onClick={handleMerge}>Merge</li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
