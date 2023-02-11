const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    // Screen.addCommand('t', 'test command (remove)', TTT.testCommand);
    Screen.addCommand('u','Up arrow',this.cursor.up)
    Screen.addCommand('d','Down arrow',this.cursor.down)
    Screen.addCommand('l','left arrow',this.cursor.left)
    Screen.addCommand('r','Right arrow',this.cursor.right)
    
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

    const horiz=TTT.horizontalWins(grid)
    const vert=TTT.verticalWins(grid)
    const diag=TTT.diagonal(grid)
    let cnt=TTT.count(grid)
    if (horiz=='X' || horiz=='O')
      return horiz
    if (vert=='X' || vert=='O')
    return vert 
    if (diag=='X' || diag=='O')
    return diag
    if (horiz==undefined && vert==undefined && diag==undefined && cnt==9)
    return 'T'
      return false
  }
  static count(grid){
    let cnt=0
    for(let i=0;i<3;i++){
      for (let j=0;j<3;j++)
      {
        if (grid[i][j]!=' ')
        cnt+=1
      }
    }
    return cnt
  }
  static diagonal(grid){
    let cnt=1

    for(let i=1;i<3;i++){
      for (let j=1;j<3;j++){
        if (i==j && grid[i][j]!=-' ' && grid[i][j]==grid[i-1][j-1])
        cnt+=1
        if (cnt==3)
        return grid[i][j]
      }
    }
    cnt=1

    for(let i=1;i<3;i++){
      for (let j=0;j<2;j++){
        if (i+j==2 && grid[i][j]!=' ' && grid[i][j]==grid[i-1][j+1])
        cnt+=1
        if (cnt==3)
        return grid[i][j]
      }
    }
  }
static horizontalWins(grid){
  for (let i=0;i<3;i++){
    let cnt=1
    for (let j=1;j<3;j++){
      if (grid[i][j]!=' ' && grid[i][j]==grid[i][j-1])
      cnt+=1
    
      if (cnt==3)
        return grid[i][j]
    }
  }
}
static verticalWins(grid){
  for (let i=0;i<3;i++){
    let cnt=1
    for (let j=1;j<3;j++){
      if (grid[j][i]!=' ' && grid[j][i]==grid[j-1][i])
      cnt+=1
    
      if (cnt==3)
        return grid[j][i]
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

module.exports = TTT;
g = [['X','O',' '],
['X','O','O'],
['O','X','O']]
console.log(TTT.checkWin(g))

