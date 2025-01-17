export const emptyBoard = [
  ['', '', '', ''], 
  ['', '', '', ''], 
  ['', '', '', ''], 
  ['', '', '', '']
];

export const noMovesLeftOne = [
  ['o', 'x', '', 'x'], 
  ['x', 'o', 'x', 'o'], 
  ['x', 'o', 'x', 'o'], 
  ['o', 'x', 'o', 'x']
];

export const noMovesLeftTwo = [
  ['x', '', 'o', 'x'], 
  ['', 'o', 'x', ''], 
  ['', 'x', 'o', ''], 
  ['o', '', 'x', 'o']
];

export const movesLeftOne = [
  ['o', 'x', '', ''], 
  ['x', 'o', 'x', 'o'], 
  ['x', 'x', 'o', 'o'], 
  ['x', 'o', 'x', 'o']
]

export const movesLeftTwo = [
  ['', 'x', '', ''], 
  ['', '', '', 'o'], 
  ['', 'x', '', 'o'], 
  ['x', '', '', 'o']
]

export const movesLeftThree = [
  ['', 'x', '', 'x'], 
  ['', 'o', 'x', 'o'], 
  ['', 'x', 'o', 'o'], 
  ['x', 'o', 'x', 'o']
]

export const movesLeftFour = [
  ['o', 'x', '', 'x'], 
  ['o', 'o', 'x', 'o'], 
  ['x', 'x', 'o', 'o'], 
  ['x', '', 'x', 'o']
]

export const movesLeftFive = [
  ['o', 'x', '', 'x'], 
  ['o', 'o', 'x', 'o'], 
  ['x', 'x', 'o', 'o'], 
  ['x', '', 'x', 'o']
]

export const boardHorizontalWin = [
  ['x', 'x', 'x', 'x'], 
  ['o', 'o', 'o', 'x'], 
  ['x', 'o', 'x', 'o'], 
  ['o', 'x', 'o', 'o']
];

export const boardVerticalWin = [
  ['o', 'x', 'o', 'x'], 
  ['o', 'o', 'o', 'x'], 
  ['x', 'o', 'x', 'x'], 
  ['o', 'x', 'o', 'x']
];

export const boardDiagonalWin = [
  ['o', 'x', 'o', 'x'], 
  ['x', 'o', 'x', 'o'], 
  ['x', 'x', 'o', 'o'], 
  ['x', 'o', 'x', 'o']
];

export const boardSquareWin = [
  ['o', 'o', 'x', 'x'],
  ['x', 'o', 'x', 'x'],
  ['o', 'x', 'x', 'o'],
  ['o', 'x', 'o', 'x']
];