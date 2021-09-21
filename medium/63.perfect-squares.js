/**
 * 
Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
 */

/**
 * 题解：动态规划
 * 状态转移方程: dp[i] = Math.min(dp[i], dp[i - j*j]+1) 其中，i为当前数值，j为某个perfect square number dp[i]初始化为 i个1相加
 * 
 * tips:每当看到the least,the largest这样的字眼，就该第一时间想到dp
 * 
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n + 1)
  dp[0] = 0

  for (let i = 1; i <= n; i++) {
    dp[i] = i

    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }

  return dp[n]
}

// use case
numSquares(12)
