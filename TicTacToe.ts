export class TicTacToe {
  public board: string[][];

  public checkWinner(board: string[][]): string { 
    for (let i = 0; i < 4; i++) {

      // Horizontal Check
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] === board[i][3]) {
        return 'winner';
      }

      // Vertical Check
      if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] === board[3][i]) {
        return 'winner';
      }

      // Diagonal Check
      if (i == 0 && board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] === board[3][3]) {
        return 'winner';
      }

      if (i == 4 && board[0][3] === board[1][2] && board[0][3] === board[2][1] && board[0][3] === board[3][0]) {
        return 'winner';
      }


      // 2x2 check
      if (i < 3) {
        for (let j = 0; j < 3; j++) {
          if (this.checkSquare(board, i, j)) {
            return 'winner';
          }
        }
      }
    }

    return 'no';
  }

  public anyMovesLeft(board: string[][]): boolean { 
    return true;
  }

  public isGameOver(board: string[][]): boolean { 
    return true;
  }

  public checkSquare(board: string[][], row: number, col: number): boolean {
    if (board[row][col] === board[row][col + 1] && board[row][col] === board[row + 1][col] && board[row][col] === board[row + 1][col + 1]) {
      return true;
    } else {
      return false;
    }
  }
}

