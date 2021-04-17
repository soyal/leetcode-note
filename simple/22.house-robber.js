/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

  Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/house-robber
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 2) return nums[0]

  const dpArr = Array(nums.length)
  dpArr[0] = nums[0]
  dpArr[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    dpArr[i] = Math.max(dpArr[i - 2] + nums[i], dpArr[i - 1])
  }

  return dpArr[nums.length - 1]
}

/**
 * 题解
 * 很典型的动态规划问题,先列状态转移方程
 * 还是比较容易能列出来的: dp(i) = Math.max(dp(i - 1), dp(i - 2) + nums[i])
 * 然后就是根据方程写代码即可
 */