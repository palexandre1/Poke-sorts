import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Home from '../pages/Home';

function App() {
  return (
    <>
      <h1 className="">Poke Sorts</h1>
      <div className="flex flex-col h-screen gap-y-5">
        <Home />
      </div>
    </>
  );
}

export default App;
