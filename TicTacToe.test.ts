import { TicTacToe } from './TicTacToe';
import { 
  boardHorizontalWin, 
  boardVerticalWin, 
  boardDiagonalWin, 
  boardSquareWin, 
  emptyBoard, 
  noMovesLeftOne, 
  noMovesLeftTwo, 
  movesLeftOne, 
  movesLeftTwo, 
  movesLeftThree 
} from './Boards';

describe('Test Winning solutions', () => {
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
});

describe('Test No Moves Left', () => {
  it('There are no moves left', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(noMovesLeftOne)).toBe(false);
  });

  it('There are no moves left', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(noMovesLeftTwo)).toBe(false);
  });
});

describe('Test Moves Left', () => {
  it('There are moves left', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(emptyBoard)).toBe(true);
  });

  it('There are moves left', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(movesLeftOne)).toBe(true);
  });

  it('There are moves left', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(movesLeftTwo)).toBe(true);
  });

  it('There are moves left', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(movesLeftThree)).toBe(true);
  });
});

describe('Test Game Over solutions', () => {
  it('Horizontal Win', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(boardHorizontalWin)).toBe(true);
  });

  it('Vertical Win', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(boardVerticalWin)).toBe(true);
  });

  it('Diagonal Win', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(boardDiagonalWin)).toBe(true);
  });

  it('2x2 Win', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(boardSquareWin)).toBe(true);
  });
});
