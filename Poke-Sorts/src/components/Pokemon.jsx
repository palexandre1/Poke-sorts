import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Pokemon({ mon }) {
  return (
    <div
      className="flex"
      key={mon.id}
    >
      <img
        className=""
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
