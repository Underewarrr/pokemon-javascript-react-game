// tileTypes.js (create a new file to define TILE_TYPES)

export const TILE_TYPES = {
  EMPTY: {
    id: 0,
    name: 'Empty',
    color:'white'
  },
  GRASS: {
    id: 1,
    name: 'Grass',
    color: 'green',
    canWalk: true,
  },
  WATER: {
    id: 2,
    name: 'Water',
    color: 'blue',
    canWalk: false,

  },
  ROCK: {
    id: 3,
    name: 'Rock',
    color: 'grey',
    canWalk: false,
    
  },
  SAND: {
    id: 4,
    name: 'Sand',
    color: 'yellow',
    canWalk: true,
  },
  WOOD: {
    id: 5,
    name: 'Wooden',
    color: 'brown',
    canWalk: true,
  },
};
