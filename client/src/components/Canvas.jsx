import React from 'react';
import PropTypes from 'prop-types';
var centerX = 0;
var centerY = 0;
const Canvas = ({draw, height, width}) => {
  const canvas = React.useRef();
  React.useEffect(() => {
    const ctx = canvas.current.getContext('2d');
  // const ctx = this.refs.canvas.getContext('2d');
    const canvasAct = document.querySelector('canvas')
      ctx.fillStyle = 'white';
      ctx.fillRect(centerX, centerY, width, height) // fill the canvas with black color
      ctx.drawImage(canvasAct, centerX, centerY, width, height)

    const gameScene = new Image();
      gameScene.src =
      "https://i.imgur.com/rkxlut8.png";
    const playerImage = new Image()
      playerImage.src =
      "https://i.imgur.com/z7zrjm4.png";

    gameScene.onload = () => {
      ctx.drawImage(gameScene, 0, 0, width, height);
      ctx.drawImage(playerImage,
      // START CROPPING SPRITE HERE
      centerX, 
      centerY, 
      playerImage.width / 4,
      playerImage.height,
      // ACTUAL SPRITE SIZE
      width / 2 - (playerImage.width / 4) / 2, // Divide a sprite into 4 parts and take the middle one
      height / 2 - playerImage.height / 2,
      playerImage.width / 4, 
      playerImage.height,
      // END CROPPING SPRITE HERE
      );
    };
  draw(ctx);
}, [draw, height, width]);

// Walk 
window.addEventListener('keydown', (playerWalk) => {
  switch (playerWalk.key) {
    case 'ArrowUp':
      console.log('ArrowUp')
    break
    case 'ArrowDown':
      console.log('ArrowDown')
    break
    case 'ArrowLeft':
      console.log('ArrowLeft')
    break
    case 'ArrowRight':
      console.log('ArrowRight')
    break
    default:
    break
  }
})

return (
    <canvas ref={canvas} height={height} width={width} />
  );
};
Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Canvas;