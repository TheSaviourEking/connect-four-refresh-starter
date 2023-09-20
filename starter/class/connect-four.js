const Screen = require("./screen");
const Cursor = require("./cursor");

const { isEmptyGrid,
  isHorizontalWin,
  isVerticalWin,
  isTie,
  isFullBoard,
  isDiagonalWinUpwardWin,
  isDiagonalWinDownwardWin
} = require('../../_helper');

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [
                  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                  [' ', ' ', ' ', ' ', ' ', ' ', ' ']
                ]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', ConnectFour.testCommand);
    Screen.addCommand('left', 'move left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right', 'move right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('up', 'move up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('down', 'move down', this.cursor.down.bind(this.cursor));

    Screen.addCommand('space', 'place move', this.placeMove.bind(this))
    this.cursor.setBackgroundColor();
    Screen.render();
  }

  placeMove() {
    Screen.render();
    Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);
    this.playerTurn === "O" ? this.playerTurn = "X" : this.playerTurn = "O";
    const winner = ConnectFour.checkWin(Screen.grid);

    !winner ? Screen.render() : ConnectFour.endGame(winner);
  }

  // Remove this
  // static testCommand() {
  //   console.log("TEST COMMAND");
  // }

  static checkWin(grid) {

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    if (isFullBoard(grid)) {
      return isTie(grid);
    } else if (isEmptyGrid(grid)) {
      return false;
    }
    else {
      return isHorizontalWin(grid) || isVerticalWin(grid) || isDiagonalWinUpwardWin(grid) || isDiagonalWinDownwardWin(grid);
    }

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = ConnectFour;