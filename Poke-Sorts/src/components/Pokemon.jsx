import { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pokemon = forwardRef(({ mon }, ref) => {
  const [position, setPostion] = useState(0)

  const handleClick = () => {
    const domNode = ref.current;
    const boundingBox = domNode.getBoundingClientRect();
    setPostion(boundingBox)
    console.log(boundingBox);
  }

  // useEffect(() =>{
  //   console.log('render')
  // }, [position])

  return (
    <div
      className="flex flex-col box-border h-32 w-32 border-4"
      id={`pokemon #${mon.id}`}
      key={mon.id}
      ref={ref}
      onClick={handleClick}
    >
      <img
        className="object-contain h-32 w-32"
        src={mon.sprites.versions['generation-v']['black-white'].animated.front_default}
        alt="/"
      />
      <span>{mon.id}</span>
    </div>
  );
});

Pokemon.propTypes = {
  mon: PropTypes.object,
};

export default Pokemon;
