// sum.test.ts
import { TicTacToe } from './TicTacToe';

let boardHorizontalWin = [
  ['x', 'x', 'x', 'x'], 
  ['o', 'x', 'o', 'x'], 
  ['x', 'o', 'x', 'x'], 
  ['x', 'x', 'o', 'o']
];

describe('Horizontal win', () => {
  it('Should be horizontal', () => {
    const game = new TicTacToe();

    expect(game.checkWinner(boardHorizontalWin)).toBe(true);
  });
});