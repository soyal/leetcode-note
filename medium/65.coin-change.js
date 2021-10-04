/**
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

  Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

  You may assume that you have an infinite number of each kind of coin.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/coin-change
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：动态规划经典题型
 * 跟之前easy级别的题目不一样的是，这里面额是动态的，但是总体思路的是没变的，只要列出状态转移方程，这道题是很容易解出来的
 * 
 * dp[i] = Math.min( dp[i - coins[j]] + 1 )
 * 将方程翻译成自然语言：当前面额i的最小硬币数量，为 [（i - 每个硬币面额）的面额所换硬币最小数量 + 1]这个数组中的最小值
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    let min = Infinity
    for (let j = 0; j < coins.length; j++) {
      const denomination = coins[j]
      if (i - denomination < 0) continue

      min = Math.min(min, dp[i - denomination] + 1)
    }

    dp[i] = min
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}
