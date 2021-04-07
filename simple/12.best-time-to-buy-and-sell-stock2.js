/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

  Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

  Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0

  let lastPrice = prices[0]
  let result = 0

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]
    const priceDiff = price - lastPrice
    if (priceDiff > 0) {
      result += priceDiff
    }

    lastPrice = price
  }

  return result
}

/**
 * 题解
 * 解这道题，最关键的地方，在于正确理解题目的意思，即所谓的利益最大化，就是将数组中每次“上涨”的差值计算出来求和
 */