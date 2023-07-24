// world.js

import { TILE_TYPES } from '../items/tiles/types';

// Function to draw a tile
export const drawTile = (ctx, x, y, type) => {
  ctx.fillStyle = TILE_TYPES[type]?.color || 'gray'; // Set the tile color based on its type
  ctx.fillRect(x, y, 64, 64); // Assuming each tile is 64x64 pixels
};

// Function to draw the game world with tiles
export const drawGameWorld = (ctx, width, height, tileMap) => {
  // Clear the canvas
  ctx.clearRect(0, 0, width, height);

  // Loop through the tileMap and draw tiles
  for (let row = 0; row < tileMap.length; row++) {
    for (let col = 0; col < tileMap[row].length; col++) {
      const tileType = tileMap[row][col];
      const x = col * 64; // Assuming each tile is 64x64 pixels
      const y = row * 64; // Assuming each tile is 64x64 pixels
      drawTile(ctx, x, y, tileType);
    }
  }
};
