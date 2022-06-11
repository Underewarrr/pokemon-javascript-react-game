import React from 'react';
import PropTypes from 'prop-types';
const Canvas = ({draw, height, width}) => {
  const canvas = React.useRef();
  React.useEffect(() => {
  const ctx = canvas.current.getContext('2d');
  // const ctx = this.refs.canvas.getContext('2d');
  const canvasAct = document.querySelector('canvas')

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height) // fill the canvas with black color
    ctx.drawImage(canvasAct, 0, 0, width, height)
    const image = new Image();
    image.src =
      "https://i.imgur.com/rkxlut8.png";
    image.onload = () => {
      ctx.drawImage(image, 0, 0, width, height);
      ctx.drawImage(playerImage, width / 2 - playerImage.width / 2, height / 2);
    };
    
    const playerImage = new Image()
    playerImage.src =
    "https://i.imgur.com/z7zrjm4.png";

    playerImage.onload = () => {
    };
     draw(ctx);

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