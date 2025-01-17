import { TicTacToe } from './TicTacToe';

let emptyBoard = [
  ['', '', '', ''], 
  ['', '', '', ''], 
  ['', '', '', ''], 
  ['', '', '', '']
];
let noMovesLeft = [
  ['o', 'x', '', 'x'], 
  ['x', 'o', 'x', 'o'], 
  ['x', 'o', 'x', 'o'], 
  ['o', 'x', 'o', 'x']
];

let anyMovesLeft = [
  ['o', 'x', '', ''], 
  ['x', 'o', 'x', 'o'], 
  ['x', 'x', 'o', 'o'], 
  ['x', 'o', 'x', 'o']
]

let boardHorizontalWin = [
  ['x', 'x', 'x', 'x'], 
  ['o', 'o', 'o', 'x'], 
  ['x', 'o', 'x', 'o'], 
  ['o', 'x', 'o', 'o']
];

let boardVerticalWin = [
  ['o', 'x', 'o', 'x'], 
  ['o', 'o', 'o', 'x'], 
  ['x', 'o', 'x', 'x'], 
  ['o', 'x', 'o', 'x']
];

let boardDiagonalWin = [
  ['o', 'x', 'o', 'x'], 
  ['x', 'o', 'x', 'o'], 
  ['x', 'x', 'o', 'o'], 
  ['x', 'o', 'x', 'o']
];

let boardSquareWin = [
  ['o', 'o', 'x', 'x'],
  ['x', 'o', 'x', 'x'],
  ['o', 'x', 'x', 'o'],
  ['o', 'x', 'o', 'x']
];

describe('Winning solutions', () => {
  it('Horizontal Win', () => {
    const game = new TicTacToe();
    expect(game.checkWinner(boardHorizontalWin)).toBe("horizontal win");
  });

  it('Vertical Win', () => {
    const game = new TicTacToe();
    expect(game.checkWinner(boardVerticalWin)).toBe("vertical win");
  });

  it('Diagonal Win', () => {
    const game = new TicTacToe();
    expect(game.checkWinner(boardDiagonalWin)).toBe("diagonal win");
  });

  it('2x2 Win', () => {
    const game = new TicTacToe();
    expect(game.checkWinner(boardSquareWin)).toBe("2x2 win");
  });

  it('There are moves left', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(emptyBoard)).toBe(true);
  });

  it('There are no moves left', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(noMovesLeft)).toBe(false);
  });
});
