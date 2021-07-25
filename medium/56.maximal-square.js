/**
 * Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/maximal-square
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：动态规划
 * 难点在于怎么设置子状态以及状态转移方程的建立
 * 子状态我们设为：dp[i][j]含义为以坐标i,j为右下角的正方形的面积
 * 
 * 转移方程为 
 * 如果matrix[i][j]为0，那么dp[i][j] = 0
 * 否则 dp[i][j] 为 计算matrix[i][j]为中心，分别向上和向左展开的最大边长(<=dp[i-1][j-1]+1)
 * 
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
  const dp = Array(matrix.length)
  for(let i=0;i<matrix.length;i++) {
      dp[i] = Array(matrix[0].length)
  }

  let result = 0

  function setDp(x, y, value) {
      dp[x][y] = Number(value)
      result = Math.max(result, value)
  }

  for(let i=0;i<matrix.length;i++) {
      for(let j=0;j<matrix[i].length;j++) {
          if(i === 0 || j === 0) {
              setDp(i, j, matrix[i][j])
          } else if(matrix[i][j] === '0') {
              setDp(i, j, matrix[i][j])
          } else {
              const preDpValue = dp[i-1][j-1]
              let increments = 0
              for(;increments+1 <= preDpValue;increments++) {
                  if(matrix[i][j-increments-1] === '0' || matrix[i-increments-1][j] === '0') break 
              }
              setDp(i, j, increments+1)
          }
      }
  }

  return Math.pow(result, 2)
};

// use case
maximalSquare([
  ['0', '0', '0', '1'],
  ['1', '1', '0', '1'],
  ['1', '1', '1', '1'],
  ['0', '1', '1', '1'],
  ['0', '1', '1', '1'],
])
