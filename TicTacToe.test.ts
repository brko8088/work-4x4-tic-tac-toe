import { TicTacToe } from './TicTacToe';
import { 
  boardHorizontalWin, 
  boardVerticalWin, 
  boardDiagonalWinOne,
  boardDiagonalWinTwo,
  boardCornersWin, 
  boardSquareWin, 
  emptyBoard, 
  noMovesLeftOne, 
  noMovesLeftTwo, 
  movesLeftOne, 
  movesLeftTwo, 
  movesLeftThree, 
  movesLeftFour,
  movesLeftFive,
  movesLeftSix,
  movesLeftSeven,
  movesLeftEight
} from './Boards';

describe('Test checkWinner Method', () => {
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

describe('Test anyMovesLeft Method', () => {
  it('No Moves Left - Winning Board 1', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(boardHorizontalWin)).toBe(false);
  });
  
  it('No Moves Left - Winning Board 2', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(boardVerticalWin)).toBe(false);
  });
  
  it('No Moves Left - Winning Board 3', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(boardDiagonalWinOne)).toBe(false);
  });

  it('No Moves Left - Winning Board 4', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(boardDiagonalWinTwo)).toBe(false);
  });

  it('No Moves Left - Winning Board 5', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(boardCornersWin)).toBe(false);
  });

  it('No Moves Left - Winning Board 6', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(boardSquareWin)).toBe(false);
  });

  it('No moves left - No Winner 1', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(noMovesLeftOne)).toBe(false);
  });

  it('No moves left - No Winner 2', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(noMovesLeftTwo)).toBe(false);
  });

  it('There are Moves left - Empty Board', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(emptyBoard)).toBe(true);
  });

  it('There are Moves left 1', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(movesLeftOne)).toBe(true);
  });

  it('There are Moves left 2', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(movesLeftTwo)).toBe(true);
  });

  it('There are Moves left 3', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(movesLeftThree)).toBe(true);
  });

  it ('There are Moves Left 4', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(movesLeftFour)).toBe(true);
  });

  it ('There are Moves Left 5', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(movesLeftFive)).toBe(true);
  });

  it ('There are Moves Left 6', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(movesLeftSix)).toBe(true);
  });

  it ('There are Moves Left 7', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(movesLeftSeven)).toBe(true);
  });

  it ('There are Moves Left 8', () => {
    const game = new TicTacToe();
    expect(game.anyMovesLeft(movesLeftEight)).toBe(true);
  });
});

describe('Test gameOver Method', () => {
  it('Game Over - Horizontal Win', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(boardHorizontalWin)).toBe(true);
  });

  it('Game Over - Vertical Win', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(boardVerticalWin)).toBe(true);
  });

  it('Game Over - Diagonal Win 1', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(boardDiagonalWinOne)).toBe(true);
  });

  it('Game Over - Diagonal Win 2', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(boardDiagonalWinTwo)).toBe(true);
  });

  it('Game Over - All Four Corners Win', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(boardCornersWin)).toBe(false);
  });

  it('Game Over - 2x2 Win', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(boardSquareWin)).toBe(true);
  });

  it('Game Over - No moves left - No Winner 1', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(noMovesLeftOne)).toBe(true);
  });

  it('Game Over - No moves left - No Winner 2', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(noMovesLeftTwo)).toBe(true);
  });

  it('No Game Over - Empty Board', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(emptyBoard)).toBe(false);
  });

  it('No Game Over - There are Moves left 1', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(movesLeftOne)).toBe(false);
  });

  it('No Game Over - There are Moves left 2', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(movesLeftTwo)).toBe(false);
  });

  it('No Game Over - There are Moves left 3', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(movesLeftThree)).toBe(false);
  });

  it ('No Game Over - There are Moves Left 4', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(movesLeftFour)).toBe(false);
  });

  it ('No Game Over - There are Moves Left 5', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(movesLeftFive)).toBe(false);
  });

  it ('No Game Over - There are Moves Left 6', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(movesLeftSix)).toBe(false);
  });

  it ('No Game Over - There are Moves Left 7', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(movesLeftSeven)).toBe(false);
  });

  it ('No Game Over - There are Moves Left 8', () => {
    const game = new TicTacToe();
    expect(game.isGameOver(movesLeftEight)).toBe(false);
  });
});
