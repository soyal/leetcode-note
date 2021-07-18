/**
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：滑动窗口
 * 
 * 在数组的题里面，看到求最长或者最短的子数组的情况，应该想到滑动窗口
 * 提醒一下，不要看到啥最大最小问题，就一定要用动态规划来解
 * 这道题没法列转移方程，用动态规划解不出来
 * 
 * 首先我们延展窗口来求解，先找到有解的范围 end++
 * 在找到一个范围有解以后，我们开始将范围收缩 start++
 * 在收缩的过程中，记录最小的子数组长度
 * 
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (nums.length === 0) return 0

  let result = Infinity
  let sum = 0
  let start = 0

  // 延展窗口
  for (let end = 0; end < nums.length; end++) {
    const num = nums[end]
    if (num >= target) return 1

    sum += num

    // 收缩窗口
    while (sum >= target) {
      result = Math.min(result, end - start + 1)

      sum = sum - nums[start++]
    }
  }

  return result === Infinity ? 0 : result
}
