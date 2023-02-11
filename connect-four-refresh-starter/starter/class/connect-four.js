const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    // Screen.addCommand('t', 'test command (remove)', ConnectFour.testCommand);
    Screen.addCommand('u','Up arrow',this.cursor.up)
    Screen.addCommand('d','Down arrow',this.cursor.down)
    Screen.addCommand('l','left arrow',this.cursor.left)
    Screen.addCommand('r','Right arrow',this.cursor.right)
    this.cursor.setBackgroundColor();
    Screen.render();
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
    const horiz=ConnectFour.horizontal(grid)
    const vert=ConnectFour.vertical(grid)
    const diagdown=ConnectFour.diagonal(grid)
    
    // let cnt=TTT.count(grid)
    if (horiz=='X' || horiz=='O')
      return horiz
    if (vert=='X' || vert=='O')
    return vert 
    if (diagdown=='X' || diagdown=='O')
    return diagdown
    // if (horiz==undefined && vert==undefined && diag==undefined && cnt==9)
    // return 'T'
  }
  static horizontal(grid){
    for (let i=0;i<6;i++){
      let cnt=1
      for (let j=1;j<7;j++){
        if (grid[i][j]!=' ' && grid[i][j]==grid[i][j-1])
        cnt+=1
      
        if (cnt==4)
          return grid[i][j]
      }
    }
  }
  static diagonal(grid){
    let cnt=1

    for(let i=1;i<6;i++){
      for (let j=1;j<7;j++){
        if (i==j && grid[i][j]!=-' ' && grid[i][j]==grid[i-1][j-1])
        cnt+=1
        if (cnt==4)
        return grid[i][j]
      }
    }
    cnt=1
    let j=5
    for(let k=1;k<12;k++){
      
        if (i+j==k && grid[i][j]!=' ' && grid[i][j]==grid[i-1][j+1])
        cnt+=1
        j-=1
        if (cnt==4)
        return grid[i][j]
    }
    
  }
  static vertical(grid){
    for (let j=0;j<7;j++){
      let cnt=1
      for (let i=1;i<6;i++){
        if (grid[i][j]!=' ' && grid[i][j]==grid[i-1][j])
        cnt+=1
      
        if (cnt==4)
          return grid[i][j]
      }
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
g = [[' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ','O'],
[' ',' ',' ',' ',' ','O',' '],
[' ',' ',' ',' ','O',' ',' '],
[' ',' ',' ','O',' ',' ',' ']]

console.log(ConnectFour.checkWin(g))