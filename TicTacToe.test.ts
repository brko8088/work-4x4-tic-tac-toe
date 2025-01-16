// sum.test.ts
import { TicTacToe } from './TicTacToe';

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
  ['o', 'o', 'x', 'o'], 
  ['x', 'x', 'o', 'o'], 
  ['x', 'x', 'o', 'o']
];

describe('Winning solutions', () => {
  it('Horizontal Win', () => {
    const game = new TicTacToe();

    expect(game.checkWinner(boardHorizontalWin)).toBe("winner");
  });

  it('Vertical Win', () => {
    const game = new TicTacToe();

    expect(game.checkWinner(boardVerticalWin)).toBe("winner");
  });
});