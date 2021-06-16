/**
 * Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/unique-binary-search-trees
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：动态规划
 * 
 * 核心：状态转移方程
 * 设dp(n)为n个节点能组成的bts个数，f(i)，i>=1为以i为顶点的bts的个数
 * dp(n) = f(1) + f(2) + f(3) + ... + f(n)
 * 这里需要有一个逻辑推导，就是f(i) = dp(i-1)*dp(n-i)，即以i为顶点的bts的个数等于其所有左边的节点组成的bts个数与右边的所有节点组成的bts个数的乘积
 * 所以dp(n) = dp(0)*dp(n-1) + dp(1)*dp(n-2) +... + dp(i-1)*dp(n-i)
 * 需要特别注意dp(0) = 1，没有实际含义，只是一个预设值，不用等同于0个节点的bts个数为1这种现实意义
 * 
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0)

  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }

  return dp[n]
}
