import React from 'react';
import PropTypes from 'prop-types';
const Canvas = ({draw, height, width}) => {
  const canvas = React.useRef();
  React.useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    ctx.fillRect(0, 0, width, height) // fill the canvas with black color
    ctx.fillStyle = 'white';
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