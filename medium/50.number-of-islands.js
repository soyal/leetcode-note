/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/number-of-islands
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：dfs + 标记
 * 最核心的是想到遍历到的'1'标记为'2'，一般的想法是拿一个map来存储遍历过的位置，会有额外的空间花销，代码也比较麻烦，直接更改标记会更简单些
 * 遇到类似的问题可以先想是否能通过改值来降低代码复杂度
 * 
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let result = 0

  function infect(x, y) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return
    if (grid[x][y] !== '1') return

    grid[x][y] = '2'
    infect(x - 1, y)
    infect(x + 1, y)
    infect(x, y - 1)
    infect(x, y + 1)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        infect(i, j)
        result++
      }
    }
  }

  return result
}
