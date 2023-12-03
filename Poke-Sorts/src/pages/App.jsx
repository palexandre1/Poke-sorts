import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <>
      <span className="text-2xl font-pokemon font-bold">Poke Sorts</span>
      <div className="flex flex-col h-screen gap-y-5">
        <Home />
      </div>
    </>
  );
}

export default App;
