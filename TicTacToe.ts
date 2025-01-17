export class TicTacToe {
  public board: string[][];

  public checkWinner(board: string[][]): string { 
    return 'yes';
  }

  public anyMovesLeft(board: string[][]): boolean { 
    return true;
  }

  public isGameOver(board: string[][]): boolean { 
    return true;
  }
}

