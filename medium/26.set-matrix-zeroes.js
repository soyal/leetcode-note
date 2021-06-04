/**
 * Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

  Follow up:

  A straight forward solution using O(mn) space is probably a bad idea.
  A simple improvement uses O(m + n) space, but still not the best solution.
  Could you devise a constant space solution?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/set-matrix-zeroes
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：逻辑
 * 这道题乍看下没有特别难的点，但是注意下限制条件，不能使用动态大小的空间
 * 也就是说，按照我们正常的思路，先扫描一次，将所有的0的坐标记录下来，第二次去做替换，这样一种解法是不满足题意的，因为要记录的坐标会用到额外的存储空间
 * 
 * 所以我们需要想另外的办法去标记要被替换成0的行和列
 * 在下面的题解中，我们先扫描了第一行和第一列，确认它们的状态（是否原本就含有0），然后就将它们作为标记位
 * 剩下的思路就是扫描从1,1开始的矩阵，如果i,j为0，则将0,j和i,0都置为0（记录阶段）
 * 然后再次从1,1开始遍历矩阵，将0,j和i,0所在的点都置为0
 * 最后根据第一行和第一列原有的状态来决定是否将第一行和第一列全部置为0
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rowZeroFlag = false
  let colZeroFlag = false

  // scan column
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      colZeroFlag = true
      break
    }
  }

  // scan row
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      rowZeroFlag = true
      break
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  if (colZeroFlag) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0
    }
  }

  if (rowZeroFlag) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0
    }
  }
}
