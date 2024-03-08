import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';
import DropdownMenu from '../components/DropdownMenu.jsx';

const Header = function () {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-stone-950">
        {/* logo here */}
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <span className="font-bold text-white">PokeSorts</span>
        </div>

        {/* Menu icon */}
        <div onClick={() => setisOpen(!isOpen)} className="w-7 h-7 bg-white absolute right-8 top-6 cursor-pointer md:hidden">
          {
            isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>
        {/* nav links here */}
        <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12`}>
          {window.location.pathname !== '/select' && (
          <Link to="/select">
            <button type="button" className="text-white py-1 px-3 md:md-8 rounded md:static">Select Team</button>
          </Link>
          /* <Link to="/edit">
            <button type="button" className="text-white py-1 px-3 md:md-8 rounded md:static">
            Edit Team</button>
          </Link> */)}
        </ul>
      </div>
    </div>
  );
};

export default Header;
