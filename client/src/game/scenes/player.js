export const drawPlayer = (ctx, playerImageRef, playerSize, playerPosition) => {
    if (!playerImageRef.current) return; // Add a check to ensure playerImageRef.current exists
  
    const playerImage = playerImageRef.current;
    const spriteWidth = playerImage.width / playerSize;
    const spriteHeight = playerImage.height;
    const playerX = playerPosition.x - spriteWidth / 2; // Center the player on the X-axis
    const playerY = playerPosition.y - spriteHeight / 2; // Center the player on the Y-axis
  
    ctx.drawImage(
      playerImage,
      spriteWidth * 1,
      0,
      spriteWidth,
      spriteHeight,
      playerX,
      playerY,
      spriteWidth,
      spriteHeight
    );
  };
  