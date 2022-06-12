import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
var centerX = 0;
var centerY = 0;

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
   /* const [keys, setKeys] = useState({
    ArrowUp: {
      pressed: false,
    },
    ArrowDown: {
      pressed: false,
    },
    ArrowRight: {
      pressed: false,
    },
    ArrowLeft: {
      pressed: false,
    }
  })  */

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
gameSceneLayer.draw()

  function animate() {
    window.requestAnimationFrame(animate);
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
