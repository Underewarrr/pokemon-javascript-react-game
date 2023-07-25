// Canvas.jsx

import React, { useEffect, useRef, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { updatePlayerPosition } from '../game/control/player';
import { drawGameWorld } from '../game/scenes/world';
import { animate } from '../game/animations/animate';
import { startMap } from '../game/maps/maps';

const Canvas = ({ draw, height, width, spriteSize = 4, spriteMiddle = 2, onPlayerPositionChange }) => {
  const canvasRef = useRef();
  const playerImageRef = useRef(new Image());
  const playerPosition = useMemo(() => ({ x: width / 2, y: height / 2 }), [height, width]);

  // Tile map data
  const initialTileMap = startMap;

  // State to manage sprite animation
  const [spriteIndex, setSpriteIndex] = useState(0);

 useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
    
  const cleanup = animate(
    ctx,
    () => drawGameWorld(ctx, width, height, initialTileMap),
    (playerPosition, keys) =>
      updatePlayerPosition(
        playerPosition,
        keys,
        initialTileMap,
        playerImageRef, // Pass playerImageRef here
        playerWalkUpImg, // Pass playerWalkUpImg here
        playerWalkDownImg, // Pass playerWalkDownImg here
        playerWalkLeftImg, // Pass playerWalkLeftImg here
        playerWalkRightImg // Pass playerWalkRightImg here
      ),
    (ctx, ...args) => drawPlayer(ctx, ...args, spriteIndex),
    width,
    height,
    playerPosition,
    playerImageRef,
    spriteSize
  );

    // Function to update spriteIndex and create animation effect
    const animateSprites = () => {
      setSpriteIndex((prevIndex) => (prevIndex + 1) % 4); // Change spriteIndex from 0 to 3 and repeat
       onPlayerPositionChange(playerPosition)
    };

    const spriteAnimationInterval = setInterval(animateSprites, 200 * 200); // Change sprite every 200 milliseconds

    return () => {
      clearInterval(spriteAnimationInterval);
      cleanup();
    };
  }, [draw, height, width, playerPosition, playerImageRef, spriteSize, initialTileMap]);

  return (
  <>
  <canvas ref={canvasRef} height={height} width={width} 
  />
  </>
  );
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  spriteSize: PropTypes.number,
  spriteMiddle: PropTypes.number,
  onPlayerPositionChange: PropTypes.func.isRequired,
};

export default Canvas;
