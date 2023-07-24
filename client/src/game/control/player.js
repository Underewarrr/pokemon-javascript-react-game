import {  useMemo } from 'react';

import { TILE_TYPES } from '../items/tiles/types'; // Import the TILE_TYPES object

export const updatePlayerPosition = (playerPosition, keys, tileMap) => {
  const playerSpeed = 3;
  const { x, y } = playerPosition;

  // Calculate the next position based on the key inputs
  let nextX = x;
  let nextY = y;
  if (keys.ArrowUp.pressed) {
    nextY -= playerSpeed;
  }
  if (keys.ArrowDown.pressed) {
    nextY += playerSpeed;
  }
  if (keys.ArrowLeft.pressed) {
    nextX -= playerSpeed;
  }
  if (keys.ArrowRight.pressed) {
    nextX += playerSpeed;
  }

  // Check for collisions with tiles that cannot be walked on
  const playerTileX = Math.floor(nextX / 64); // Assuming each tile is 64x64 pixels
  const playerTileY = Math.floor(nextY / 64); // Assuming each tile is 64x64 pixels
  const nextTileType = tileMap[playerTileY][playerTileX];

  if (TILE_TYPES[nextTileType].canWalk) {
    // Update the player position if the next tile can be walked on
    playerPosition.x = nextX;
    playerPosition.y = nextY;
  }
};

export const handleKeyDown = (event, keys) => {
  const { key } = event;
  switch (key) {
    case 'ArrowUp':
      keys.ArrowUp.pressed = true;
      console.log('Walk Up');
      break;
    case 'ArrowDown':
      keys.ArrowDown.pressed = true;
      console.log('Walk Down');
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true;
      console.log('Walk Left');
      break;
    case 'ArrowRight':
      keys.ArrowRight.pressed = true;
      console.log('Walk Right');
      break;
    default:
      break;
  }
};

export const handleKeyUp = (event, keys) => {
  const { key } = event;
  switch (key) {
    case 'ArrowUp':
      keys.ArrowUp.pressed = false;
      console.log('Walk Up');
      break;
    case 'ArrowDown':
      keys.ArrowDown.pressed = false;
      console.log('Walk Down');
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;
      console.log('Walk Left');
      break;
    case 'ArrowRight':
      keys.ArrowRight.pressed = false;
      console.log('Walk Right');
      break;
    default:
      break;
  }
};

// Export the keys object wrapped in useMemo to memoize it
export const useKeys = () => {
  return useMemo(() => ({
    ArrowUp: { pressed: false },
    ArrowDown: { pressed: false },
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false },
  }), []);
};
