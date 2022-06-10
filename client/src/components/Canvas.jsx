import React from 'react';
import PropTypes from 'prop-types';
const Canvas = ({draw, height, width}) => {
  const canvas = React.useRef();
  React.useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height) // fill the canvas with black color
    draw(ctx);
    console.log(ctx)

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