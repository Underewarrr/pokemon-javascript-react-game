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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png";
    image.onload = () => {
      ctx.drawImage(image, 0, 0, height, width);
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