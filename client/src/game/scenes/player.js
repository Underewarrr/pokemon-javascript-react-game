// scenes/player.js

export const drawPlayer = (ctx, playerImageRef, playerSize, playerPosition, spriteIndex) => {
  if (!playerImageRef.current) return; // Add a check to ensure playerImageRef.current exists

  const playerImage = playerImageRef.current;
  const spriteWidth = playerImage.width / playerSize;
  const spriteHeight = playerImage.height;
  const playerX = playerPosition.x - spriteWidth / 2; // Center the player on the X-axis
  const playerY = playerPosition.y - spriteHeight / 2; // Center the player on the Y-axis

  ctx.drawImage(
    playerImage,
    spriteWidth * spriteIndex, // Calculate the x-coordinate for the sprite frame
    0,
    spriteWidth,
    spriteHeight,
    playerX,
    playerY,
    spriteWidth,
    spriteHeight
  );
};

export const playerWalkDownImg = 'https://i.imgur.com/z7zrjm4.png';
export const playerWalkUpImg = 'https://i.imgur.com/Q1B70Lu.png';
export const playerWalkLeftImg = 'https://i.imgur.com/5BGcQiu.png';
export const playerWalkRightImg = 'https://i.imgur.com/CnnOWjF.png';


