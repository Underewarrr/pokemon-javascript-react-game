import React, { useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { updatePlayerPosition } from '../game/control/player'; 
import { drawGameWorld } from '../game/scenes/world'; 
import { drawPlayer } from '../game/scenes/player'; 
import { animate } from '../game/animations/animate'; // Import the animate function from the external file


const Canvas = ({ draw, height, width, spriteSize = 4, spriteMiddle = 2 }) => {
  const canvasRef = useRef();
  const playerImageRef = useRef(new Image());
  playerImageRef.current.src = 'https://i.imgur.com/z7zrjm4.png';

  const playerPosition = useMemo(() => ({ x: width / 2, y: height / 2 }), [height, width]); // Initial player position

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const cleanup = animate(ctx, drawGameWorld, updatePlayerPosition, drawPlayer, width, height, playerPosition, playerImageRef, spriteSize);

    return () => {
      cleanup();
    };
  }, [draw, height, width, playerPosition, playerImageRef, spriteSize]);

  // ...

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
