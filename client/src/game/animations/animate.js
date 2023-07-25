// animations/animate.js

import { handleKeyDown, handleKeyUp } from '../control/player'; 


export const animate = (ctx, drawGameWorld, updatePlayerPosition, drawPlayer, width, height, playerPosition, playerImageRef, spriteSize) => {
  const keys = {
    ArrowUp: { pressed: false },
    ArrowDown: { pressed: false },
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false },
  };

  const animateFrame = () => {
    ctx.clearRect(0, 0, width, height); // Clear the canvas each frame
    drawGameWorld(ctx, width, height);
    updatePlayerPosition(playerPosition, keys);
    drawPlayer(ctx, playerImageRef, spriteSize, playerPosition); // Pass required parameters to the drawPlayer function
    requestAnimationFrame(animateFrame);
  };
  animateFrame();

  const handleKeyDownEvent = (event) => handleKeyDown(event, keys);
  const handleKeyUpEvent = (event) => handleKeyUp(event, keys);

  document.addEventListener('keydown', handleKeyDownEvent);
  document.addEventListener('keyup', handleKeyUpEvent);

  return () => {
    document.removeEventListener('keydown', handleKeyDownEvent);
    document.removeEventListener('keyup', handleKeyUpEvent);
  };
};
