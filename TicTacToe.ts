export class TicTacToe {
  public board: string[][];

  /*
  * Check if there is a winner
  * @param board: string[][]
  * @return string[]
  * @return 'no' if there is no winner
  */
  public checkWinner(board: string[][]): string[] { 
    for (let i = 0; i < 4; i++) {
      // Horizontal Check
      if (board[i][0] !== " " && board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] === board[i][3]) {
        return ['win', 'horizontal', board[i][0]];
      }

      // Vertical Check
      if (board[0][i] !== " " && board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] === board[3][i]) {
        return ['win', 'vertical', board[0][i]];
      }

      // Diagonal Check at 0,0
      if (i == 0 && board[i][i] !== " " && board[i][i] === board[1][1] && board[i][i] === board[2][2] && board[i][i] === board[3][3]) {
        return ['win', 'diagonal', board[0][0]];
      }

      // Diagonal Check at 3,0
      if (i == 3 && board[i][0] !== " " && board[i][0] === board[2][1] && board[i][0] === board[1][2] && board[i][0] === board[0][3]) {
        return ['win', 'diagonal', board[0][3]];
      }

      // All four corners win
      if (i == 0 && board[i][i] !== " " && board[i][i] === board[i][3] && board[i][i] === board[3][i] && board[i][i] === board[3][3]) {
        return ['win', 'corners', board[0][0]];
      }

      // 2x2 check
      if (i < 3) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] !== " " && board[i][j] === board[i][j + 1] && board[i][j] === board[i + 1][j] && board[i][j] === board[i + 1][j + 1]) {
            return ['win', '2x2', board[i][j]];
          }
        }
      }
    }

    return ['no','no','no'];
  }

  public anyMovesLeft(board: string[][]): boolean { 
    if (this.checkWinner(board)[0] === 'no') {
      return false;
    }

    let horizontalCheck = false;
    let verticalCheck = false;
    let diagonalCheck = false;
    let squareCheck = false;
    
    for (let i = 0; i < 4; i++) {
      // Horizontal Check
      horizontalCheck = this.anyMovesLeftForWin(board[i])

      // Vertical Check
      verticalCheck = this.anyMovesLeftForWin([board[0][i], board[1][i], board[2][i], board[3][i]])

      // Diagonal Check
      if (i == 0 || i == 3) {
        diagonalCheck = this.anyMovesLeftForWin([board[0][0], board[1][1], board[2][2], board[3][3]])
      }
      
      // 2x2 check
      if (i < 3) {
        for (let j = 0; j < 3; j++) {
          squareCheck = this.anyMovesLeftForWin([board[i][j], board[i][j + 1], board[i + 1][j], board[i + 1][j + 1]])
        }
      }
    }

    return horizontalCheck || verticalCheck || diagonalCheck || squareCheck;
  }

  public anyMovesLeftForWin(characters: string[]): boolean {
    let emptySpaceFound = false;
    let characterToFind = ' ';

    for (let i = 0; i < characters.length; i++) {
      if (characters[i] === ' ') {
        emptySpaceFound = true;
      } else {
        if (characterToFind === ' ') {
          characterToFind = characters[i];
        } else if (characters[i] !== characterToFind) {
          return false;
        }
      }
    }

    return characterToFind === ' ' ? true : emptySpaceFound && characterToFind !== ' ';
  }

  public isGameOver(board: string[][]): boolean { 
    if (this.checkWinner(board)[0] !== 'no' || !this.anyMovesLeft(board)) {
      return true;
    } else {
      return false;
    }
  }
}

