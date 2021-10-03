/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

  Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

  After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
  Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：动态规划
 * 这道题非常经典，是一道 动态规划 + 有限状态的题目
 * 如果动态规划的题目不熟练，很容易列不出状态转移方程，因为不会将状态存储进dp数组中
 * 而这道题的指导意义就在于可以让做题人学会一种思路：在dp中，枚举节点状态，高端一点，叫做存储状态机
 * 
 * 现在来说解题思路：
 * 先枚举出每个节点所有的状态，dp[i]代表 第i天所持有的最大资产总额
 * dp[i][0]表示无股票(早就卖了)的情况下的总额
 * dp[i][1]表示有股票的情况下的总额
 * dp[i][2]表示当天卖出股票的情况下的总额
 * 
 * 对于dp[i][0]，它前面的状态有两种情况，要么昨天刚卖，要么昨天也没持有，所以dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2])
 * 对于dp[i][1]，要么昨天就买了，要么昨天手上没持有且不是卖出的情况，然后今天买入，所以dp[i][1] = Math.max(dp[i - 1][0] - price, dp[i - 1][1])
 * 对于dp[i][2]，只有可能是昨天还是持有状态，然后今天卖出，所以dp[i][2] = dp[i - 1][1] + price
 * 
 * 在最后，很容易知道要使自己受益为最大，那么必定是手上的股票已经全部抛出，要么是早就抛出dp[i][0]，要么是当天抛出dp[i][2]，找一个最大值返回即可
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // dp的状态
  // 0:不持有 空心
  // 1:持有  实心
  // 2.不持有(刚卖) 半空心
  const len = prices.length
  const dp = Array(len)

  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(3)
  }

  dp[0] = [0, -1 * prices[0], 0]

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2])
    dp[i][1] = Math.max(dp[i - 1][0] - price, dp[i - 1][1])
    dp[i][2] = dp[i - 1][1] + price
  }

  return Math.max(dp[len - 1][0], dp[len - 1][2])
}
