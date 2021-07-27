import React from 'react';

const Tile = ({ object }) => {
  const values = Object.values(object);

  return (
    <div className="tile-container">
      {values.map((value) => (
        <p
          key={values.indexOf(value)}
          className={values.indexOf(value) === 0 ? 'tile-title' : 'tile'}
        >
          {value}
        </p>
      ))}
    </div>
  );
};

export default Tile;
