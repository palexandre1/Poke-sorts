import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Pokemon({ mon, list, add }) {
  const [position, setPostion] = useState({ id: 0, x: 0, y: 0 });
  const positionRef = useRef(null);

  useEffect(() => {
    const x = positionRef.current.offsetLeft;
    const y = positionRef.current.offsetTop;
    const { id } = mon;
    const data = { id: id, x: x, y: y };
    add((list) => ([...list, data]));
  }, []);

  return (
    <div
      className="flex flex-col box-border h-32 w-32 border-4"
      id={`pokemon #${mon.id}`}
      key={mon.id}
      ref={positionRef}
    >
      <img
        className="object-contain h-32 w-32"
        src={mon.sprites.versions['generation-v']['black-white'].animated.front_default}
        alt="/"
      />
      <span>{mon.id}</span>
    </div>
  );
}

Pokemon.propTypes = {
  mon: PropTypes.object,
};

export default Pokemon;
