// tileTypes.js (create a new file to define TILE_TYPES)

export const TILE_TYPES = {
  EMPTY: {
    id: 0,
    name: 'Empty',
    color:'white',
    canWalk: false,
    speed: 0,
  },
  GRASS: {
    id: 1,
    name: 'Grass',
    color: 'green',
    canWalk: true,
    speed: 3,  
  },
  WATER: {
    id: 2,
    name: 'Water',
    color: 'blue',
    canWalk: false,
    speed: 0,
  },
  ROCK: {
    id: 3,
    name: 'Rock',
    color: 'grey',
    canWalk: false,
    speed: 0,
  },
  SAND: {
    id: 4,
    name: 'Sand',
    color: 'yellow',
    canWalk: true,
    speed: 2,
    },
  WOOD: {
    id: 5,
    name: 'Wooden',
    color: 'brown',
    canWalk: true,
    speed: 1,  
    },
};
