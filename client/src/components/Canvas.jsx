import React from 'react';
import PropTypes from 'prop-types';
const Canvas = ({draw, height, width, image}) => {
  const canvas = React.useRef();
  React.useEffect(() => {
      const ctx = canvas.current.getContext('2d');
      const canvasAct = document.querySelector('canvas')

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height) // fill the canvas with black color
    ctx.drawImage(canvasAct, 0, 0, width, height)
    
    const image = new Image();
    image.src = '../src/components/img/base.png';
    image.onload = () => {
        ctx.drawImage(image, 0, 0);
    }
    console.log(canvasAct)
    console.log(image)

     draw(ctx);

  });
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