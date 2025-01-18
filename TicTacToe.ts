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
    let areThereMovesLeft = false;
    
    for (let i = 0; i < 4; i++) {
      // Horizontal Check
      areThereMovesLeft = this.anyMovesLeftForWin(board[i]) || areThereMovesLeft;

      // Vertical Check
      areThereMovesLeft = this.anyMovesLeftForWin([board[0][i], board[1][i], board[2][i], board[3][i]]) || areThereMovesLeft;

      // Diagonal Check with nested four corners check
      if (i === 0) {
        // Diagonal Check from 0,0
        areThereMovesLeft = this.anyMovesLeftForWin([board[0][0], board[1][1], board[2][2], board[3][3]]) || areThereMovesLeft;
        // All Four Corners Check
        areThereMovesLeft = this.anyMovesLeftForWin([board[0][0], board[0][3], board[3][0], board[3][3]]) || areThereMovesLeft;
      }

      // Diagonal Check from 3,0
      if (i === 3) {
        areThereMovesLeft = this.anyMovesLeftForWin([board[3][0], board[2][1], board[1][2], board[0][3]]) || areThereMovesLeft;
      }
      
      // 2x2 check
      if (i < 3) {
        for (let j = 0; j < 3; j++) {
          areThereMovesLeft = this.anyMovesLeftForWin([board[i][j], board[i][j + 1], board[i + 1][j], board[i + 1][j + 1]]) || areThereMovesLeft
        }
      }
    }

    return areThereMovesLeft;
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
    if (this.checkWinner(board)[0] === 'win' || !this.anyMovesLeft(board)) {
      return true;
    } else {
      return false;
    }
  }
}

