import { useState, useEffect } from 'react';
import Select from './Select';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import axios from 'axios';

const queryClient = new QueryClient();

function App() {
  const [team, setTeam] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <h1>Poke Sorts</h1>
      <div className="flex items-center">

      </div>
      <div className="flex items-center">
        <button type="button" className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2">Select Team</button>
        <button type="button" className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2">Edit Team</button>
        <button type="button" className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2">Sort Team</button>
      </div>
      <Select />
    </QueryClientProvider>
  );
}

export default App;
