import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom'

function Edit() {

  return (
    <>
      <div className="flex items-center">
        <Link to="/">
          <button type="button" className="px-4 py-2 font-bold text-white bg-rose-600 rounded hover:bg-rose-800">Home</button>
        </Link>
      </div>
      <h1>
        Edit your Pokemon team on this page
      </h1>
    </>
  );
}

export default Edit;
