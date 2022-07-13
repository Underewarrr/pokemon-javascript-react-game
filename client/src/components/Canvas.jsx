import React from 'react';
import PropTypes from 'prop-types';
var centerX = 0;
var centerY = 0;
var spriteSize = 4;
var spriteMiddle = 2;


const keys = {
  ArrowUp: {
    pressed:false
  },
  ArrowDown: {
    pressed:false
  },
  ArrowLeft: {
    pressed:false
  },
  ArrowRight: {
    pressed:false
  }
}

document.addEventListener('keydown', function(playerWalk) {
  switch (playerWalk.key) {
    case 'ArrowUp':
      keys.ArrowUp.pressed = true
      console.log('Walk Up')
    break;
    case 'ArrowDown':
      keys.ArrowDown.pressed = true
      console.log('Walk Down')
    break;
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        console.log('Walk Left')
      break;
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        console.log('Walk Right')
      break;
      default:
      break;
  }
});
document.addEventListener('keyup', function(playerWalk) {
  switch (playerWalk.key) {
    case 'ArrowUp':
      keys.ArrowUp.pressed = false
      console.log('Walk Up')
    break;
    case 'ArrowDown':
      keys.ArrowDown.pressed = false
      console.log('Walk Down')
    break;
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = false
        console.log('Walk Left')
      break;
      case 'ArrowRight':
        keys.ArrowRight.pressed = false
        console.log('Walk Right')
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
      playerImage.src = "https://i.imgur.com/z7zrjm4.png";
  class Sprite {
    constructor({ position, velocity, image }) {
      this.position = position
      this.image = image 
    }
  
    draw(){
      ctx.drawImage(this.image, this.position.x, this.position.y, width, height);
    }}
// Game Scene Configuration
  const gameScene = new Image();
    gameScene.src = "https://i.imgur.com/rkxlut8.png";
  const gameSceneLayer = new Sprite({   
    position: { 
      x: centerX,
      y: centerY
    },
    image: gameScene
}) //  End Game Scene Configuration


function animate() {
    gameSceneLayer.draw() // Draw Game Scene Layer
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
    if (keys.ArrowDown.pressed) {
      gameSceneLayer.position.y = gameSceneLayer.position.y - 3;  // Move Down
    }
    if (keys.ArrowUp.pressed) {
      gameSceneLayer.position.y = gameSceneLayer.position.y + 3;  // Move Up
    }
    if (keys.ArrowRight.pressed) {
      gameSceneLayer.position.x = gameSceneLayer.position.x - 3;  // Move Left
    }
    if (keys.ArrowLeft.pressed) {
      gameSceneLayer.position.x = gameSceneLayer.position.x + 3;  // Move Right
    }
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
