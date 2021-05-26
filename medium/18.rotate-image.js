/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

  You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/rotate-image
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：逻辑分析与代码表达能力
 * 
 * 首先肯定是要找规律，如果只是要做坐标变化的推导，其实很容易就看出变化为 [x,y] => [y, n-1-y]
 * 但是，题目要求是不进行额外的存储空间的申请，因此没法直接运用这个公式
 * 所以我们这里需要换个思路来做这个二维数组的原地替换
 * 
 * 这里采取的思路是分层旋转，简单说，就是将一个nxn的正方形，看成是nxn,(n-2)x(n-2),(n-4)x(n-4)...的环套起来的图形
 * 然后我们分层来做旋转，这样可以方便我们做原地替换
 * 
 * 替换的思路就比较简单了，直接看代码就行
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  function subRotate(_n, start) {
    if (_n < 2) return

    for (let i = 0; i < _n - 1; i++) {
      const startEdge = start
      const endEdge = start + _n - 1
      let temp = matrix[startEdge][i + startEdge]
      matrix[startEdge][i + startEdge] = matrix[endEdge - i][startEdge]
      matrix[endEdge - i][startEdge] = matrix[endEdge][endEdge - i]
      matrix[endEdge][endEdge - i] = matrix[startEdge + i][endEdge]
      matrix[startEdge + i][endEdge] = temp
    }
  }

  for (let n = matrix[0].length, start = 0; n > 0; ) {
    subRotate(n, start)
    n -= 2
    start++
  }
}

// use case
rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
])
