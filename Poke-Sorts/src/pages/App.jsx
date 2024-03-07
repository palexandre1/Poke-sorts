import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Home from './Home.jsx';

function App() {
  return (
    <div className="flex flex-col h-screen gap-y-5">
      <Home />
    </div>
  );
}

export default App;
