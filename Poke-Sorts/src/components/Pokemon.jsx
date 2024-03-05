import { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pokemon = forwardRef(({ mon }, ref) => {
  const [position, setPostion] = useState(0)

  // const handleClick = () => {
  //   const domNode = ref.current;
  //   const boundingBox = domNode.getBoundingClientRect();
  //   setPostion(boundingBox)
  //   console.log(boundingBox);
  // }

  return (
    <div
      className="flex flex-col relative box-border h-32 w-32 border-0 border-black"
      id={`pokemon #${mon.id}`}
      key={mon.id}
      ref={ref}
    >
      <img
        className="object-contain h-32 w-32"
        src={mon.sprites.versions['generation-v']['black-white'].animated.front_default}
        alt="/"
      />
      <span className="absolute bottom-0 left-0">{mon.id}</span>
    </div>
  );
});

Pokemon.propTypes = {
  mon: PropTypes.object,
};

export default Pokemon;
