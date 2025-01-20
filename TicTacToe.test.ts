import { TicTacToe } from "./TicTacToe";
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
  movesLeftEight,
} from "./Boards";

describe("Test checkWinner Method", () => {
  it("Horizontal Win", () => {
    const game = new TicTacToe(boardHorizontalWin);
    let result = game.checkWinner();
    expect(result.win).toBe(true);
    expect(result.type).toBe("horizontal");
    expect(result.character).toBe("x");
  });

  it("Vertical Win", () => {
    const game = new TicTacToe(boardVerticalWin);
    let result = game.checkWinner();
    expect(result.win).toBe(true);
    expect(result.type).toBe("vertical");
    expect(result.character).toBe("x");
  });

  it("Diagonal Win 1", () => {
    const game = new TicTacToe(boardDiagonalWinOne);
    let result = game.checkWinner();
    expect(result.win).toBe(true);
    expect(result.type).toBe("diagonal");
    expect(result.character).toBe("o");
  });

  it("Diagonal Win 2", () => {
    const game = new TicTacToe(boardDiagonalWinTwo);
    let result = game.checkWinner();
    expect(result.win).toBe(true);
    expect(result.type).toBe("diagonal");
    expect(result.character).toBe("x");
  });

  it("Four Corners Win", () => {
    const game = new TicTacToe(boardCornersWin);
    let result = game.checkWinner();
    expect(result.win).toBe(true);
    expect(result.type).toBe("corners");
    expect(result.character).toBe("x");
  });

  it("2x2 Win", () => {
    const game = new TicTacToe(boardSquareWin);
    let result = game.checkWinner();
    expect(result.win).toBe(true);
    expect(result.type).toBe("2x2");
    expect(result.character).toBe("x");
  });

  it("Empty Board No Winner", () => {
    const game = new TicTacToe(emptyBoard);
    let result = game.checkWinner();
    expect(result.win).toBe(false);
    expect(result.type).toBe("");
    expect(result.character).toBe("");
  });

  it("No Moves Left 1 No Winner", () => {
    const game = new TicTacToe(noMovesLeftOne);
    let result = game.checkWinner();
    expect(result.win).toBe(false);
    expect(result.type).toBe("");
    expect(result.character).toBe("");
  });

  it("No Moves Left 2 No Winner", () => {
    const game = new TicTacToe(noMovesLeftTwo);
    let result = game.checkWinner();
    expect(result.win).toBe(false);
    expect(result.type).toBe("");
    expect(result.character).toBe("");
  });

  it("There are Moves Left 1 No Winner", () => {
    const game = new TicTacToe(movesLeftOne);
    let result = game.checkWinner();
    expect(result.win).toBe(false);
    expect(result.type).toBe("");
    expect(result.character).toBe("");
  });

  it("There are Moves Left 2 No Winner", () => {
    const game = new TicTacToe(movesLeftTwo);
    let result = game.checkWinner();
    expect(result.win).toBe(false);
    expect(result.type).toBe("");
    expect(result.character).toBe("");
  });

  it("There are Moves Left 3 No Winner", () => {
    const game = new TicTacToe(movesLeftThree);
    let result = game.checkWinner();
    expect(result.win).toBe(false);
    expect(result.type).toBe("");
    expect(result.character).toBe("");
  });

  it("There are Moves Left 4 No Winner", () => {
    const game = new TicTacToe(movesLeftFour);
    let result = game.checkWinner();
    expect(result.win).toBe(false);
    expect(result.type).toBe("");
    expect(result.character).toBe("");
  });

  it("There are Moves Left 5 No Winner", () => {
    const game = new TicTacToe(movesLeftFive);
    let result = game.checkWinner();
    expect(result.win).toBe(false);
    expect(result.type).toBe("");
    expect(result.character).toBe("");
  });

  it("There are Moves Left 6 No Winner", () => {
    const game = new TicTacToe(movesLeftSix);
    let result = game.checkWinner();
    expect(result.win).toBe(false);
    expect(result.type).toBe("");
    expect(result.character).toBe("");
  });

  it("There are Moves Left 7 No Winner", () => {
    const game = new TicTacToe(movesLeftSeven);
    let result = game.checkWinner();
    expect(result.win).toBe(false);
    expect(result.type).toBe("");
    expect(result.character).toBe("");
  });

  it("There are Moves Left 8 No Winner", () => {
    const game = new TicTacToe(movesLeftEight);
    let result = game.checkWinner();
    expect(result.win).toBe(false);
    expect(result.type).toBe("");
    expect(result.character).toBe("");
  });
});

describe("Test anyMovesLeft Method", () => {
  it("No Moves Left - Winning Board 1", () => {
    const game = new TicTacToe(boardHorizontalWin);
    expect(game.anyMovesLeft()).toBe(false);
  });

  it("No Moves Left - Winning Board 2", () => {
    const game = new TicTacToe(boardVerticalWin);
    expect(game.anyMovesLeft()).toBe(false);
  });

  it("No Moves Left - Winning Board 3", () => {
    const game = new TicTacToe(boardDiagonalWinOne);
    expect(game.anyMovesLeft()).toBe(false);
  });

  it("No Moves Left - Winning Board 4", () => {
    const game = new TicTacToe(boardDiagonalWinTwo);
    expect(game.anyMovesLeft()).toBe(false);
  });

  it("No Moves Left - Winning Board 5", () => {
    const game = new TicTacToe(boardCornersWin);
    expect(game.anyMovesLeft()).toBe(false);
  });

  it("No Moves Left - Winning Board 6", () => {
    const game = new TicTacToe(boardSquareWin);
    expect(game.anyMovesLeft()).toBe(false);
  });

  it("No moves left - No Winner 1", () => {
    const game = new TicTacToe(noMovesLeftOne);
    expect(game.anyMovesLeft()).toBe(false);
  });

  it("No moves left - No Winner 2", () => {
    const game = new TicTacToe(noMovesLeftTwo);
    expect(game.anyMovesLeft()).toBe(false);
  });

  it("There are Moves left - Empty Board", () => {
    const game = new TicTacToe(emptyBoard);
    expect(game.anyMovesLeft()).toBe(true);
  });

  it("There are Moves left 1", () => {
    const game = new TicTacToe(movesLeftOne);
    expect(game.anyMovesLeft()).toBe(true);
  });

  it("There are Moves left 2", () => {
    const game = new TicTacToe(movesLeftTwo);
    expect(game.anyMovesLeft()).toBe(true);
  });

  it("There are Moves left 3", () => {
    const game = new TicTacToe(movesLeftThree);
    expect(game.anyMovesLeft()).toBe(true);
  });

  it("There are Moves Left 4", () => {
    const game = new TicTacToe(movesLeftFour);
    expect(game.anyMovesLeft()).toBe(true);
  });

  it("There are Moves Left 5", () => {
    const game = new TicTacToe(movesLeftFive);
    expect(game.anyMovesLeft()).toBe(true);
  });

  it("There are Moves Left 6", () => {
    const game = new TicTacToe(movesLeftSix);
    expect(game.anyMovesLeft()).toBe(true);
  });

  it("There are Moves Left 7", () => {
    const game = new TicTacToe(movesLeftSeven);
    expect(game.anyMovesLeft()).toBe(true);
  });

  it("There are Moves Left 8", () => {
    const game = new TicTacToe(movesLeftEight);
    expect(game.anyMovesLeft()).toBe(true);
  });
});

describe("Test gameOver Method", () => {
  it("Game Over - Horizontal Win", () => {
    const game = new TicTacToe(boardHorizontalWin);
    expect(game.isGameOver()).toBe(true);
  });

  it("Game Over - Vertical Win", () => {
    const game = new TicTacToe(boardVerticalWin);
    expect(game.isGameOver()).toBe(true);
  });

  it("Game Over - Diagonal Win 1", () => {
    const game = new TicTacToe(boardDiagonalWinOne);
    expect(game.isGameOver()).toBe(true);
  });

  it("Game Over - Diagonal Win 2", () => {
    const game = new TicTacToe(boardDiagonalWinTwo);
    expect(game.isGameOver()).toBe(true);
  });

  it("Game Over - All Four Corners Win", () => {
    const game = new TicTacToe(boardCornersWin);
    expect(game.isGameOver()).toBe(true);
  });

  it("Game Over - 2x2 Win", () => {
    const game = new TicTacToe(boardSquareWin);
    expect(game.isGameOver()).toBe(true);
  });

  it("Game Over - No moves left - No Winner 1", () => {
    const game = new TicTacToe(noMovesLeftOne);
    expect(game.isGameOver()).toBe(true);
  });

  it("Game Over - No moves left - No Winner 2", () => {
    const game = new TicTacToe(noMovesLeftTwo);
    expect(game.isGameOver()).toBe(true);
  });

  it("No Game Over - Empty Board", () => {
    const game = new TicTacToe(emptyBoard);
    expect(game.isGameOver()).toBe(false);
  });

  it("No Game Over - There are Moves left 1", () => {
    const game = new TicTacToe(movesLeftOne);
    expect(game.isGameOver()).toBe(false);
  });

  it("No Game Over - There are Moves left 2", () => {
    const game = new TicTacToe(movesLeftTwo);
    expect(game.isGameOver()).toBe(false);
  });

  it("No Game Over - There are Moves left 3", () => {
    const game = new TicTacToe(movesLeftThree);
    expect(game.isGameOver()).toBe(false);
  });

  it("No Game Over - There are Moves Left 4", () => {
    const game = new TicTacToe(movesLeftFour);
    expect(game.isGameOver()).toBe(false);
  });

  it("No Game Over - There are Moves Left 5", () => {
    const game = new TicTacToe(movesLeftFive);
    expect(game.isGameOver()).toBe(false);
  });

  it("No Game Over - There are Moves Left 6", () => {
    const game = new TicTacToe(movesLeftSix);
    expect(game.isGameOver()).toBe(false);
  });

  it("No Game Over - There are Moves Left 7", () => {
    const game = new TicTacToe(movesLeftSeven);
    expect(game.isGameOver()).toBe(false);
  });

  it("No Game Over - There are Moves Left 8", () => {
    const game = new TicTacToe(movesLeftEight);
    expect(game.isGameOver()).toBe(false);
  });
});
