import { TicTacToe } from './TicTacToe';
import { 
  boardHorizontalWin, 
  boardVerticalWin, 
  boardCornersWin, 
  boardSquareWin, 
  emptyBoard, 
  noMovesLeftOne, 
  noMovesLeftTwo, 
  movesLeftOne, 
  movesLeftTwo, 
  movesLeftThree, 
  boardDiagonalWinOne,
  boardDiagonalWinTwo,
  movesLeftFour,
  movesLeftFive,
  movesLeftSix,
  movesLeftSeven,
  movesLeftEight
} from './Boards';

describe('Test Check Winner Method', () => {
  it('Horizontal Win', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(boardHorizontalWin);
    expect(result[0]).toBe('win');
    expect(result[1]).toBe('horizontal');
    expect(result[2]).toBe('x');
  });

  it('Vertical Win', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(boardVerticalWin);
    expect(result[0]).toBe('win');
    expect(result[1]).toBe('vertical');
    expect(result[2]).toBe('x');
  });

  it('Diagonal Win 1', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(boardDiagonalWinOne);
    expect(result[0]).toBe('win');
    expect(result[1]).toBe('diagonal');
    expect(result[2]).toBe('o');
  });

  
  it('Diagonal Win 2', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(boardDiagonalWinTwo);
    expect(result[0]).toBe('win');
    expect(result[1]).toBe('diagonal');
    expect(result[2]).toBe('x');
  });

  it('Four Corners Win', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(boardCornersWin);
    expect(result[0]).toBe('win');
    expect(result[1]).toBe('corners');
    expect(result[2]).toBe('x');
  });

  it('2x2 Win', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(boardSquareWin);
    expect(result[0]).toBe('win');
    expect(result[1]).toBe('2x2');
    expect(result[2]).toBe('x');
  });

  it ('Empty Board No Winner', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(emptyBoard);
    expect(result[0]).toBe("no");
    expect(result[1]).toBe("no");
    expect(result[2]).toBe("no");
  });

  it ('No Moves Left 1 No Winner', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(noMovesLeftOne);
    expect(result[0]).toBe("no");
    expect(result[1]).toBe("no");
    expect(result[2]).toBe("no");
  });

  it ('No Moves Left 2 No Winner', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(noMovesLeftTwo);
    expect(result[0]).toBe("no");
    expect(result[1]).toBe("no");
    expect(result[2]).toBe("no");

  });

  it ('There are Moves Left 1 No Winner', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(movesLeftOne);
    expect(result[0]).toBe("no");
    expect(result[1]).toBe("no");
    expect(result[2]).toBe("no");
  });

  it ('There are Moves Left 2 No Winner', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(movesLeftTwo);
    expect(result[0]).toBe("no");
    expect(result[1]).toBe("no");
    expect(result[2]).toBe("no");
  });

  it ('There are Moves Left 3 No Winner', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(movesLeftThree);
    // expect(result[0]).toBe("no");
    expect(result[1]).toBe("no");
    expect(result[2]).toBe("no");
  });

  it ('There are Moves Left 4 No Winner', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(movesLeftFour);
    expect(result[0]).toBe("no");
    expect(result[1]).toBe("no");
    expect(result[2]).toBe("no");
  });

  it ('There are Moves Left 5 No Winner', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(movesLeftFive);
    expect(result[0]).toBe("no");
    expect(result[1]).toBe("no");
    expect(result[2]).toBe("no");
  });

  it ('There are Moves Left 6 No Winner', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(movesLeftSix);
    expect(result[0]).toBe("no");
    expect(result[1]).toBe("no");
    expect(result[2]).toBe("no");
  });

  it ('There are Moves Left 7 No Winner', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(movesLeftSeven);
    expect(result[0]).toBe("no");
    expect(result[1]).toBe("no");
    expect(result[2]).toBe("no");
  });

  it ('There are Moves Left 8 No Winner', () => {
    const game = new TicTacToe();
    let result = game.checkWinner(movesLeftEight);
    expect(result[0]).toBe("no");
    expect(result[1]).toBe("no");
    expect(result[2]).toBe("no");
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
    expect(game.isGameOver(boardDiagonalWinOne)).toBe(true);
  });

  it('2x2 Win', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(boardSquareWin)).toBe(true);
  });
});
