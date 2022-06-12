import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
var centerX = 0;
var centerY = 0;
var spriteSize = 4;
var spriteMiddle = 2;

document.addEventListener('keydown', function(playerWalk) {
  switch (playerWalk.key) {
      case 'ArrowLeft':
        console.log('Walk Left')
      break;
      case 'ArrowRight':
        console.log('Walk Right')
      break;
      case 'ArrowUp':
        console.log('Walk Up')
      break;
      case 'ArrowDown':
        console.log('Walk Down')
      break;
      default:
      break;
  }
});

const Canvas = ({draw, height, width}) => {  
const canvas = React.useRef();
  React.useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    const playerImage = new Image()
      playerImage.src =
      "https://i.imgur.com/z7zrjm4.png";
class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position
    this.image = image
  }
  draw(){
    ctx.drawImage(this.image, centerX, centerY, width, height);
  }
}
const gameScene = new Image();
gameScene.src = "https://i.imgur.com/rkxlut8.png";
const gameSceneLayer = new Sprite({   
  position: { 
    x: centerX,
    y: centerY
  },
  image: gameScene
})


function animate() {
    gameSceneLayer.draw()
    window.requestAnimationFrame(animate);
    ctx.drawImage(playerImage,
    // START CROPPING SPRITE HERE
    centerX, 
    centerY, 
    playerImage.width / spriteSize,
    playerImage.height,
    // ACTUAL SPRITE SIZE
    width / spriteMiddle - (playerImage.width / spriteSize) / spriteMiddle,
    height / spriteMiddle - playerImage.height / spriteMiddle,
    playerImage.width / spriteSize, 
    playerImage.height,
    // END CROPPING SPRITE HERE
    );   
  }
  animate();
}, [draw, height, width]);

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
