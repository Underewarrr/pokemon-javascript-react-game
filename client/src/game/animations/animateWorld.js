// animations/animate.js


export const animateWorld = (ctx, drawGameWorld, width, height) => {


  const animateFrame = () => {
    ctx.clearRect(0, 0, width, height); // Clear the canvas each frame
    drawGameWorld(ctx, width, height);
    requestAnimationFrame(animateFrame);
  };
  animateFrame();

 
};
