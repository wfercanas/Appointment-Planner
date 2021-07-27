import React from 'react';

import Tile from '../tile/Tile';

export const TileList = ({ contacts, appointments }) => {
  const arr = contacts || appointments;
  return arr.map((element, index) => <Tile key={index} object={element} />);
};
