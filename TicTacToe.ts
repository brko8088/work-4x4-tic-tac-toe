import { emptyBoard } from "./Boards";

type Result = {
  win: boolean; // true or false
  type: string; // horizontal, vertical, diagonal, corners, 2x2, draw
  character: string; // x or o
}

export class TicTacToe {
  public board: string[][];
  public result: Result ;

  // Constructor
  constructor(board?: string[][]) {
    this.board = board ? board : emptyBoard
    this.result = {
      win: false,
      type: '',
      character: ''
    }
  }

  /*
  * Check if there is a winner
  */
  public checkWinner(): Result { 
    for (let i = 0; i < 4; i++) {
      // Horizontal Win
      if (this.winCheck("horizontal", this.board[i]).win) {
        return this.result;
      }

      // Vertical Win
      if (this.winCheck("vertical", [
        this.board[0][i], 
        this.board[1][i], 
        this.board[2][i], 
        this.board[3][i]
      ]).win) {
        return this.result;
      }

      // 2x2 Win
      if (i < 3) {
        for (let j = 0; j < 3; j++) {
          if (this.winCheck("2x2", [
                this.board[i][j], 
                this.board[i][j + 1], 
                this.board[i + 1][j], 
                this.board[i + 1][j + 1]
              ]).win) {
            return this.result;
          }
        }
      }
    }
    
    // Diagonal Wins
    if (this.winCheck("diagonal", [
      this.board[0][0], 
      this.board[1][1], 
      this.board[2][2], 
      this.board[3][3]
    ]).win) {
      return this.result;
    }

    if (this.winCheck("diagonal", [
      this.board[3][0], 
      this.board[2][1], 
      this.board[1][2], 
      this.board[0][3]
    ]).win) {
      return this.result;
    }

    // All four corners win
    if (this.winCheck("corners", [
      this.board[0][0], 
      this.board[0][3], 
      this.board[3][0], 
      this.board[3][3]
    ]).win) {
      return this.result;
    }

    return this.result;
  }

  public isGameOver(): boolean { 
    if (this.checkWinner()[0] === 'win' || !this.anyMovesLeft()) {
      return true;
    } else {
      return false;
    }
  }

  public winCheck(type: string, characters: string[]): Result {
    if (characters[0] !== ' ' && 
        characters[0] === characters[1] && 
        characters[0] === characters[2] && 
        characters[0] === characters[3]) {
      this.result.win = true;
      this.result.type = type;
      this.result.character = characters[0];
    }

    return this.result
  }

  public anyMovesLeft(): boolean { 
    if (this.checkWinner().win) {
      return false;
    }

    let areThereMovesLeft = false;
    
    for (let i = 0; i < 4; i++) {
      // Horizontal Check
      areThereMovesLeft = this.checkMovesLeftForWin(this.board[i]) || areThereMovesLeft;

      // Vertical Check
      areThereMovesLeft = this.checkMovesLeftForWin([
        this.board[0][i], 
        this.board[1][i], 
        this.board[2][i], 
        this.board[3][i]
      ]) || areThereMovesLeft;

      // 2x2 check
      if (i < 3) {
        for (let j = 0; j < 3; j++) {
          areThereMovesLeft = this.checkMovesLeftForWin([
            this.board[i][j], 
            this.board[i][j + 1], 
            this.board[i + 1][j], 
            this.board[i + 1][j + 1]
          ]) || areThereMovesLeft
        }
      }
    }

    // Diagonal Check from 0,0
    areThereMovesLeft = this.checkMovesLeftForWin([
      this.board[0][0], 
      this.board[1][1], 
      this.board[2][2], 
      this.board[3][3]
    ]) || areThereMovesLeft;
      
    // Diagonal Check from 3,0
    areThereMovesLeft = this.checkMovesLeftForWin([
      this.board[3][0], 
      this.board[2][1], 
      this.board[1][2], 
      this.board[0][3]
    ]) || areThereMovesLeft;

    // All Four Corners Check
    areThereMovesLeft = this.checkMovesLeftForWin([
      this.board[0][0], 
      this.board[0][3], 
      this.board[3][0], 
      this.board[3][3]
    ]) || areThereMovesLeft;

    return areThereMovesLeft;
  }

  // Determines if a possible win is still possible for a given set of characters
  // return false if any played character does not match each other
  public checkMovesLeftForWin(characters: string[]): boolean {
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
  
  public anyMovesLeftRegardlessOfDraw(): boolean { 
    if (this.checkWinner().win) {
      return false;
    }
    
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === ' ') {
          return true
        }
      }
    }

    return false;
  }
}
