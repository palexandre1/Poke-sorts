import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom'

function Edit() {

  return (
    <>
      <div className="flex items-center">
        <Link to="/">
          <button type="button" className="flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2">Home</button>
        </Link>
      </div>
      <h1>
        Edit your Pokemon team on this page
      </h1>
    </>
  );
}

export default Edit;
