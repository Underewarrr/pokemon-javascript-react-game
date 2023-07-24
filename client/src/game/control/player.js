import {  useMemo } from 'react';

export const updatePlayerPosition = (playerPosition, keys) => {
  const playerSpeed = 3;
  if (keys.ArrowUp.pressed) {
    playerPosition.y -= playerSpeed;
  }
  if (keys.ArrowDown.pressed) {
    playerPosition.y += playerSpeed;
  }
  if (keys.ArrowLeft.pressed) {
    playerPosition.x -= playerSpeed;
  }
  if (keys.ArrowRight.pressed) {
    playerPosition.x += playerSpeed;
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
