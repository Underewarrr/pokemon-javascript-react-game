// control/player.js

import { useMemo } from 'react';


import { TILE_TYPES } from '../items/tiles/types'; // Import the TILE_TYPES object


export const updatePlayerPosition = (playerPosition, keys, tileMap, playerImageRef, playerWalkUpImg, playerWalkDownImg, playerWalkLeftImg, playerWalkRightImg) => {
  const playerSpeed = 3; // Default player speed

  // Get the tile index where the player is located
  const playerTileX = Math.floor(playerPosition.x / 64); // Assuming each tile is 64x64 pixels
  const playerTileY = Math.floor(playerPosition.y / 64); // Assuming each tile is 64x64 pixels
  const currentTileType = tileMap[playerTileY][playerTileX];

  // Calculate the totalSpeed based on the current tile type
  let totalSpeed = playerSpeed; // Default to playerSpeed if the tile type has no specific speed
  if (TILE_TYPES[currentTileType].speed !== undefined) {
    totalSpeed = TILE_TYPES[currentTileType].speed;
  }

  // Calculate the next position based on the key inputs and totalSpeed
  let nextX = playerPosition.x;
  let nextY = playerPosition.y;

  if (keys.ArrowUp.pressed) {
    playerImageRef.current.src = playerWalkUpImg; // Change player image to walk_up
    nextY -= totalSpeed; // Move up by totalSpeed pixels
  }
  if (keys.ArrowDown.pressed) {
    playerImageRef.current.src = playerWalkDownImg; // Change player image to walk_down
    nextY += totalSpeed; // Move down by totalSpeed pixels
  }
  if (keys.ArrowLeft.pressed) {
    playerImageRef.current.src = playerWalkLeftImg; // Change player image to walk_left
    nextX -= totalSpeed; // Move left by totalSpeed pixels
  }
  if (keys.ArrowRight.pressed) {
    playerImageRef.current.src = playerWalkRightImg; // Change player image to walk_right
    nextX += totalSpeed; // Move right by totalSpeed pixels
  }

  // Check for collisions with tiles that cannot be walked on
  const nextTileX = Math.floor(nextX / 64); // Assuming each tile is 64x64 pixels
  const nextTileY = Math.floor(nextY / 64); // Assuming each tile is 64x64 pixels
  const nextTileType = tileMap[nextTileY][nextTileX];

  if (TILE_TYPES[nextTileType].canWalk) {
    // Update the player position if the next tile can be walked on
    playerPosition.x = nextX;
    playerPosition.y = nextY;
    console.log("Player position changed to x: " + playerPosition.x + ", y: " + playerPosition.y);
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
