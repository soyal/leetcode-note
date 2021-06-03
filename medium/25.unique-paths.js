/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

  The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

  How many possible unique paths are there?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/unique-paths
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 解法1：动态规划
 * 最好理解的思路就是动态规划的思路
 * 先列出状态转移方程 dp(m, n) = dp(m-1,n) + dp(m, n-1)
 * 然后是最小子状态：dp(0,0) = 1 dp(i,j) = 0，i<0 || j<0
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = {}

  dp['0-0'] = 1

  function getDpResult(i, j) {
    if (i < 0 || j < 0) return 0
    return dp[`${i}-${j}`]
  }

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      if (i === 0 && j === 0) continue
      const key = `${i}-${j}`
      dp[key] = getDpResult(i - 1, j) + getDpResult(i, j - 1)
    }
  }

  return dp[`${m - 1}-${n - 1}`]
}
