/**
 * Given an m x n matrix board containing 'X' and 'O', capture all regions surrounded by 'X'.

  A region is captured by flipping all 'O's into 'X's in that surrounded region.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/surrounded-regions
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：矩阵遍历 + 逻辑思维
 * 
 * 常规思路：遍历矩阵，然后如果该节点是'O'，则进行追溯，判断其所有节点的连通性，如果所有相邻节点是连通的，则用一个set记录下来，用于下次判断
 * 评价：时间复杂度和空间复杂度都很高
 * 
 * 升级版本：
 * 1.遍历整个矩阵最外围的一圈，从'O'开始将其所有相邻的节点置为'-'
 * 2.重新完整遍历矩阵，遇到'O'直接置为X(之前没被置为'-'肯定是被包围的)，遇到'-'置为'O'（还原）
 * 
 * 
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  function traversal(x, y) {
    if (x < 0 || x > board.length - 1 || y < 0 || y > board[0].length - 1)
      return

    if (board[x][y] === 'X' || board[x][y] === '-') return

    board[x][y] = '-'

    traversal(x - 1, y)
    traversal(x + 1, y)
    traversal(x, y - 1)
    traversal(x, y + 1)
  }

  for (let x = 0; x < board.length; x++) {
    if (x === 0 || x === board.length - 1) {
      for (let y = 0; y < board[x].length; y++) {
        traversal(x, y)
      }
    } else {
      traversal(x, 0)
      if (board[x].length > 1) {
        traversal(x, board[x].length - 1)
      }
    }
  }

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === '-') {
        board[x][y] = 'O'
      } else if (board[x][y] === 'O') {
        board[x][y] = 'X'
      }
    }
  }
}
