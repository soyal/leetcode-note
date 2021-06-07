/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.

  The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/word-search
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：回溯法
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let result = false

  function backtrace(x, y, visited, subWord) {
    if (subWord.length === 0) {
      result = true
      return
    }

    if (x < 0 || x > board.length - 1 || y < 0 || y > board[0].length - 1)
      return

    if (result) return

    const visitedKey = `${x}-${y}`
    if (visited[visitedKey]) return

    const currChar = board[x][y]
    if (subWord[0] !== currChar) return

    const nextSubword = subWord.slice(1)
    visited[visitedKey] = true
    backtrace(x - 1, y, visited, nextSubword)
    backtrace(x + 1, y, visited, nextSubword)
    backtrace(x, y - 1, visited, nextSubword)
    backtrace(x, y + 1, visited, nextSubword)
    visited[visitedKey] = false
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      backtrace(i, j, {}, word)
      if (result) {
        return result
      }
    }
  }

  return result
}

// use case
exist([['a']], 'a')
