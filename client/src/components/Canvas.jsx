// Canvas.jsx

import React, { useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { updatePlayerPosition } from '../game/control/player'; 
import { drawGameWorld, drawTile } from '../game/scenes/world'; // Import the new drawTile function
import { drawPlayer, playerImgUrl } from '../game/scenes/player'; 
import { animate } from '../game/animations/animate';
import { TILE_TYPES } from '../game/items/tiles/types'; // Import the TILE_TYPES object

const Canvas = ({ draw, height, width, spriteSize = 4, spriteMiddle = 2 }) => {
  const canvasRef = useRef();
  const playerImageRef = useRef(new Image());
  playerImageRef.current.src = playerImgUrl;
  const playerPosition = useMemo(() => ({ x: width / 2, y: height / 2 }), [height, width]);

  // Tile map data
  const initialTileMap = [
    ['GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'WATER', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS'],
    ['GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'WATER', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS'],
    ['GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'WATER', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS'],
    ['GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'WATER', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS'],
    ['GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'WOOD',  'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS'],
    ['GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'WATER', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS'],  
    ['GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'WATER', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS'],
    ['GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'WATER', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS'],
    ['GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'WATER', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS'],
    ['GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'WATER', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS', 'GRASS'],
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const cleanup = animate(
      ctx,
      () => drawGameWorld(ctx, width, height, initialTileMap), // Pass the tile map data here
      (playerPosition, keys) => updatePlayerPosition(playerPosition, keys, initialTileMap), // Pass the tile map data here
      drawPlayer,
      width,
      height,
      playerPosition,
      playerImageRef,
      spriteSize
      );
    
      return () => {
      cleanup();
    };
  }, [draw, height, width, playerPosition, playerImageRef, spriteSize, initialTileMap]);

  return <canvas ref={canvasRef} height={height} width={width} />;
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  spriteSize: PropTypes.number,
  spriteMiddle: PropTypes.number,
};

export default Canvas;
