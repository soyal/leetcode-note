/**
 * Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

  Integers in each row are sorted in ascending from left to right.
  Integers in each column are sorted in ascending from top to bottom.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/search-a-2d-matrix-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：选择合适的遍历起点
 * 这道题有点类似脑筋急转弯，最重要的点在于选择合适的遍历起点
 * 左上角和右下角作为遍历起点的话，因为向下(向上)和向右(向左)加减都一致
 * 而以左下角和右上角作为起点，那么处理方式就非常类似于一颗BST
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let result = false

  function find(x, y) {
    if (result) return

    if (x > matrix.length - 1 || x < 0) return

    if (y > matrix[x].length - 1 || y < 0) return

    const num = matrix[x][y]

    if (num === target) {
      result = true
      return
    } else if (num < target) {
      find(x, y + 1)
    } else {
      find(x - 1, y)
    }
  }

  find(matrix.length - 1, 0) // 从左下角开始

  return result
}
