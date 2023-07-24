export const drawGameWorld = (ctx, width, height) => {
    const gameWorldRef = new Image();
    gameWorldRef.src = 'https://i.imgur.com/rkxlut8.png';
    ctx.drawImage(gameWorldRef, 0, 0, width, height);
  };
  