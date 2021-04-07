/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0

  let minPrice = Infinity
  let result = 0
  prices.forEach((price) => {
    if (price < minPrice) {
      minPrice = price
    } else {
      result = Math.max(result, price - minPrice)
    }
  })

  return result
}

/**
 * 题解
 * 这道题还是很简单的，就是求一个数组中，a[j] - a[i]的最大值，j > i
 * 只需要一次遍历，如果当前元素比最小值小，则更新最小值，否则就更新当前元素与最小值的差
 */