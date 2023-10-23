import { useState, useEffect } from 'react';

function Card({ mon }) {
  return (
    <div className="flex items-center">
      <span>Pokemon ID#</span>
      <span>Pokemon Name</span>
    </div>
  );
}

export default Card;
